import './Desserts.css'; 
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import { getDesserts } from "../../Services/DessertList";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart"
import { useCartContext } from "../Cart/CartContext";
// import { IoCart } from "react-icons/io5";


const Desserts = () => {
    const [desserts, setDesserts] = useState([]);

    const { cartVisibility, setCartVisible, productsInCart, addProductToCart, onQuantityChange, onProductRemove } = useCartContext();
    
   
    

    

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
                        onClick={() => addProductToCart(dessert)}>Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        );
    };

   

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
                    onCartButtonClick={() => setCartVisible(true)}
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
      