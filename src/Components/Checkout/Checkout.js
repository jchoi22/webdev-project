import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import './Checkout.css';

const Checkout = () => {
    const location = useLocation(); // Access the location object
    const { products } = location.state || { products: [] }; // Get products from state

    return (
        <div>
            <h3>Please Finish your order here by providing a few more details!</h3>
            <Link to={-1}>
                    &larr; Want to order more? Go back now
                </Link>
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
            {/* Add your checkout form here */}
        </div>
    );
};

export default Checkout;

