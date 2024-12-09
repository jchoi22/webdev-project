import React, { useState } from "react";
import Parse from "parse";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useCartContext } from "../Cart/CartContext";

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate(); // For navigation
    const { products } = location.state || { products: [] };
    const [cartCleared, setCartCleared] = useState(false);

    const { setProducts } = useCartContext();

    const handleCheckout = async () => {
        try {
            // get the current user
            const currentUser = Parse.User.current();
            if (!currentUser) throw new Error("No user logged in");

            // calculate total price
            const totalPrice = products.reduce(
                (sum, product) => sum + product.dessertPrice * product.count,
                0
            );

            // format desserts as an array of objects
            const desserts = products.map(product => ({
                title: product.dessertTitle,
                quantity: product.count,
                price: product.dessertPrice,
            }));

            // save the order to the database
            const CustomerOrders = Parse.Object.extend("CustomerOrders");
            const order = new CustomerOrders();
            order.set("Email", currentUser.get("email"));
            order.set("TotalPrice", totalPrice);
            order.set("Desserts", desserts);

            await order.save();
            console.log("Order saved successfully!");

            // clear the cart

            
            setProducts([]); // clear state in parent
            localStorage.removeItem("cart"); // clear localStorage
            setCartCleared(true);
        } catch (error) {
            console.error("Error saving order:", error);
            alert("Failed to complete checkout. Please try again.");
        }
    };

    if (cartCleared) {
        return (
            <div>
                <h3>Your order was placed successfully!</h3>
                <p>Please visit 123 imaginary road anytime between 8am and 5pm to pick it up!</p>
                <button
                    onClick={() => navigate("/")} // navigate to home page
                    className="go-home-button"
                >
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <div>
            <h3>Please finish your order here by providing a few more details!</h3>
            <Link to={-1}>&larr; Want to order more? Go back now</Link>
            <div className="show-cart">
                <h4>Your Cart:</h4>
                {products.map(product => (
                    <div className="cart-item" key={product.id}>
                        <div className="cart-text">
                        <p>{product.dessertTitle}</p>
                        <p>Quantity: {product.count}</p>
                        <p>Price: ${(product.dessertPrice * product.count).toFixed(2)}</p>
                        </div>
                        <img
                            src={product.imgName}
                            alt={product.dessertTitle}
                            width="75"
                            height="115"
                        />
                    </div>
                ))}

            <div className="total-price">
                    <h4>Price:</h4>
                    <p>
                        Price before tax: ${products.reduce((total, product) => total + product.dessertPrice * product.count, 0).toFixed(2)}
                    </p>
                    <p>Tax:  ${products.reduce((total, product) => total + product.dessertPrice * product.count * .07, 0).toFixed(2)}</p>
                    <hr></hr>
                    <p>Total: ${products.reduce((total, product) => total + product.dessertPrice * product.count * 1.07, 0).toFixed(2)}</p>
                </div>
            </div>
            <div className="container">
            <form >
               <div className="row">
                 <div className="col-50">
                   <h3>Billing Address</h3>
                   <label >Full Name</label>
                   <input
                     type="text"
                     id="fullname"
                     name="fullname"
                     placeholder="First and Last Name"
                   />
                 
                   <label>Address</label>
                   <input
                     type="text"
                     id="address"
                     name="address"
                     placeholder="123 your road"
                   />
                   <label>City</label>
                   <input
                     type="text"
                     id="city"
                     name="city"
                     placeholder="city"
                   />
                   <div className="row">
                     <div className="col-50">
                       <label>State</label>
                       <input
                         type="text"
                         id="state"
                         name="state"
                         placeholder="state"
                       />
                     </div>
                     <div className="col-50">
                       <label>Zip</label>
                       <input
                         type="text"
                         id="zip"
                         name="zip"
                         placeholder="zip"
                       />
                     </div>
                   </div>
                 </div>
                 <div className="col-50">
                   <h3>Payment</h3>
                  
                   <label>Name on Card</label>
                   <input
                     type="text"
                     id="cardname"
                     name="cardname"
                     placeholder="Name on your Card"
                   />
                   <label>Credit Card Number</label>
                   <input
                     type="text"
                     id="cardnumber"
                     name="cardnumber"
                     placeholder="1111-2222-3333-4444"
                   />
                   <label>Exp Month</label>
                   <input
                     type="text"
                     id="expmonth"
                     name="expmonth"
                     placeholder="month"
                   />
                   <div className="row">
                     <div className="col-50">
                       <label>Exp Year</label>
                       <input
                         type="text"
                         id="expyear"
                         name="expyear"
                         placeholder="year"
                       />
                     </div>
                     <div className="col-50">
                       <label>CVV</label>
                       <input
                         type="text"
                         id="cvv"
                         name="cvv"
                         placeholder="123"
                       />
                     </div>
                   </div>
                 </div>
               </div>
              
              
             </form>
             <button onClick={handleCheckout} className="checkout-button">
                Submit Order
            </button>
             </div>

           
        </div>
    );
};

export default Checkout;
