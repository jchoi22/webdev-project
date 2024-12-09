//Manage the state of the cart globally
//can remove all items from cart on submit and can access from any page on nav
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productsInCart, setProducts] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );
    const [cartVisibility, setCartVisible] = useState(false);


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(productsInCart));
    }, [productsInCart]);



    //show and donlt show cart
    const toggleCartVisibility = () => {
       
        setCartVisible((prev) => !prev);
   
 };

    const onQuantityChange = (productId, count) => {
        setProducts((prev) => {
            const productIndex = prev.findIndex((item) => item.id === productId);
            if (productIndex !== -1) 
            {
             prev[productIndex].count = count;
            }
            return [...prev];
            });
    };

    //to reomve products from cart
    const onProductRemove = (productId) => {
        setProducts((prev)  =>
            prev.filter((product) => product.id !== productId)
        );
    };
    //add priducst but will only be used in desserts.js
    const addProductToCart = (product) => {
        const newProduct = { ...product, count: 1 };
        setProducts([...productsInCart, newProduct]);
    };

    return (
        <CartContext.Provider value={{ 
            productsInCart, addProductToCart, setProducts, cartVisibility,
            toggleCartVisibility,
            onQuantityChange,
            onProductRemove, 
            setCartVisible, }}>
            {children}

        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);