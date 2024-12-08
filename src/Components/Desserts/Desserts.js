import './Desserts.css'; 
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import { getDesserts } from "../../Services/DessertList";
import React, { useContext, useEffect, useState } from "react";
import Cart from "../Cart/Cart"
import { IoCart } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";


const Desserts = () => {
    const [desserts, setDesserts] = useState([]);
    const [cartVisibility, setCartVisible] = useState(false);
    /*This will allow the products to stay in the cart even if the browser is refreshed */
    const [productsInCart, setProducts] = 
        useState(JSON.parse( /*Will convert json string to js object */
        localStorage.getItem("cart")) || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(productsInCart))
    }, [productsInCart]);
    
    const addProductToCart = (product) => {
        const newProduct = {
            ...product, count: 1, 
        }
        setProducts([...productsInCart, newProduct,]);
    };

    

    const handleCartButtonClick = () => {
        setCartVisible(true);
      };

    useEffect(() => {
        const fetchDesserts = async () => {
            const data = await getDesserts();
            setDesserts(data);
        };

        fetchDesserts();
    }, []);

    
    const renderDessertsByCategory = (category) => {
        console.log("Desserts Array: ", desserts);
        console.log("Filtering by Category: ", category);
        const filteredDesserts = desserts.filter(
            (dessert) => dessert.dessertCategory === category
        );

        console.log("Filtered Desserts: ", filteredDesserts);

        return (
            <div className="images-flex">
                {filteredDesserts.map((dessert) => (
                    <div className="images" key={dessert.id}>
                        <img
                            src={dessert.imgName}
                            alt={dessert.dessertTitle}
                            width="150"
                            height="200"
                        />
                        <h4 className="title">{dessert.dessertTitle}</h4>
                        <p className="description">{dessert.dessertDesc}</p>
                        <br />
                        <p className="price">  Price: ${dessert.dessertPrice.toFixed(2)}</p>
                        <button 
                        className="order-button" 
                        onClick={() => {addProductToCart(dessert)
                            handleCartButtonClick();
                            }}>Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    const onQuantityChange = (productId, count) => {
        setProducts((oldState) => {
            const productsIndex = oldState.findIndex(
                (item) => item.id === productId
            );
            if(productsIndex !== -1){
                oldState[productsIndex].count =
                    count;
            }
            return [...oldState];
        })
    }

    const onProductRemove = (product) => {
        setProducts((oldState) => {
            const productsIndex = oldState.findIndex(
                (item) => item.id === product.id
            );
            if(productsIndex !== -1){
                oldState.splice(productsIndex, 1) /*remove only one item*/
            }
            return [...oldState];
        })
    }

    return (
        <div>
                
                {cartVisibility && (
                    <Cart
                    visibility={cartVisibility}
                    products={productsInCart}
                    onClose={() => setCartVisible(false)}
                    onQuantityChange={onQuantityChange}
                    onProductRemove={onProductRemove}
                    />
                )}

                
                <Footer
                    productsInCart={productsInCart}
                    onCartButtonClick={handleCartButtonClick}
                />
                
                
                <h2>Menu</h2>
            
            <h3>Our Options:</h3>
            <p style={{ margin: "1rem 0" }}>
                Browse through the various options before you make a decision on which dessert to order!
            </p>
            <br />

            <h4>Cookies:</h4>
            {renderDessertsByCategory("cookie")}
            <br />

            <h4>Cakes:</h4>
            {renderDessertsByCategory("cake")}
            <br />

            <h4>Other:</h4>
            {renderDessertsByCategory("other")}
            <br />

            {/* Order Link */}
            <p style={{ fontSize: "35px" }}>
                Check back for more options... But if you're happy now, you can always
                <Link to="/Orders"> ORDER HERE </Link>
            </p>
        </div>
    );
};

export default Desserts;
       