import React, { useState } from "react";
import Parse from "parse";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate(); // For navigation
    const { products } = location.state || { products: [] };
    const [cartCleared, setCartCleared] = useState(false);

    const handleCheckout = async () => {
        try {
            // Get the current user
            const currentUser = Parse.User.current();
            if (!currentUser) throw new Error("No user logged in");

            // Calculate total price
            const totalPrice = products.reduce(
                (sum, product) => sum + product.dessertPrice * product.count,
                0
            );

            // Format desserts as an array of objects
            const desserts = products.map(product => ({
                title: product.dessertTitle,
                quantity: product.count,
                price: product.dessertPrice,
            }));

            // Save the order to the database
            const CustomerOrders = Parse.Object.extend("CustomerOrders");
            const order = new CustomerOrders();
            order.set("Email", currentUser.get("email"));
            order.set("TotalPrice", totalPrice);
            order.set("Desserts", desserts);

            await order.save();
            console.log("Order saved successfully!");

            // Clear the cart
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
                <button
                    onClick={() => navigate("/")} // Navigate to home page
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
            <div>
                <h4>Your Cart:</h4>
                {products.map(product => (
                    <div key={product.id}>
                        <p>{product.dessertTitle}</p>
                        <p>Quantity: {product.count}</p>
                        <p>Price: ${(product.dessertPrice * product.count).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleCheckout} className="checkout-button">
                Submit Order
            </button>
        </div>
    );
};

export default Checkout;
