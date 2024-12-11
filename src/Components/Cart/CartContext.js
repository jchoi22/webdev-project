//Manage the state of the cart globally
//can remove all items from cart on submit and can access from any page on nav
//cart can be modified from more than just desserts page
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productsInCart, setProducts] = useState( //tracks the products in the cart from local storage
        JSON.parse(localStorage.getItem("cart")) || []
    );
    const [cartVisibility, setCartVisible] = useState(false); //manages the visibilty of the cart

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(productsInCart));
    }, [productsInCart]);

    //utility functions for cart interaction
    const toggleCartVisibility = () => {
        setCartVisible((prev) => !prev);
    };

    const onQuantityChange = (productId, count) => {
        setProducts((prev) => {
            const updatedProducts = prev.map((item) =>
                item.id === productId ? { ...item, count: parseInt(count, 10) } : item
            );
            return updatedProducts;
        });
    };

    const onProductRemove = (productId) => {
        setProducts((prev) => prev.filter((product) => product.id !== productId));
    };

    const addProductToCart = (product) => {
        setProducts((prev) => {
            const existingProductIndex = prev.findIndex((item) => item.id === product.id);

            if (existingProductIndex !== -1) {
                // If the product is already in the cart, create a new array with updated quantity
                const updatedProducts = prev.map((item, index) =>
                    index === existingProductIndex
                        ? { ...item, count: item.count + 1 }
                        : item
                );
                return updatedProducts;
            } else {
                // If the product is not in the cart, add it with count 1
                return [...prev, { ...product, count: 1 }];
            }
        });
    };

    return (
        //makes avaialble to all child '{children}' components when wrapped - wrapped in app.js
        <CartContext.Provider 
            value={{
                productsInCart,
                addProductToCart,
                setProducts,
                cartVisibility,
                toggleCartVisibility,
                onQuantityChange,
                onProductRemove,
                setCartVisible,
            }}
        >
            {children} 
        </CartContext.Provider>
    );
};



export const useCartContext = () => useContext(CartContext);