import './Cart.css'; 

import { useNavigate } from "react-router-dom";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";


function Cart({ //pass as props
    visibility,
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
}) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (products.length > 0) {
            onClose();
            navigate('/Checkout', { state: { products } }); 
            
        }
    };

	return (
		<div className="modal" 
        style={{
            display: visibility
            ? "block" : "none",
        }}> 
        <div className='shoppingCart'>
		<div className="header">
            <h2>Shopping Cart</h2>
            <button className="close-button" onClick={onClose}>
                <AiFillCloseCircle size={40}/>
            </button>
        </div>
        <div className='cart-products'>
            {products.length === 0 && (
                <span className="empty-text">
                    Your cart is empty
                </span>
            )}
            {products.map(product => (
                <div className="cart-product" key={product.id}>
                    <img src={product.imgName} alt={product.dessertDesc}/>
                    <div className="product-info">
                        <h3>{product.dessertTitle}</h3>
                        <span className="product-price">
                        ${(product.dessertPrice * product.count).toFixed(2)}
                        </span>
                    </div>
                    <div>
                        <select className="count" value={product.count} /*select the number of the product*/
                        onChange={(event) => {
                        onQuantityChange(product.id, event.target.value);
                        }}>
                            {
                                [...Array(10).keys(),].map(number =>
                                    {
                                        const num = number + 1;
                                        return (<option value={num} key={num}>{num}</option>);
                                    })
                            }
                        </select>
                        <button className="remove-button" onClick={() => onProductRemove(product.id)}><RiDeleteBin6Line size={20} /></button>
                    </div>

                </div>

            ))}
            {products.length > 0 && <button className="checkout-button" onClick={handleCheckout}>Proceed to checkout</button>}

             </div>
        </div>
		</div>
	);
}

export default Cart;
