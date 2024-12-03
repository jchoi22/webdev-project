import './Cart.css'; 
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import React from "react";


const Cart = ({ cart }) => {
    return (
      <div>
        <Footer />
        <h3>Your Cart</h3>
        <ul>
          {cart.map((dessert, index) => (
            <li key={index}>
              {dessert.dessertTitle} - ${dessert.dessertPrice.toFixed(2)}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total: ${cart.reduce((total, dessert) => total + dessert.dessertPrice, 0).toFixed(2)}</strong>
        </p>
        
      </div>
    );
  };

export default Cart;
