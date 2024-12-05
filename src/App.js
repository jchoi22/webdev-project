import * as ENV from "./environments.js";
import Parse from "parse";
import Components from './Components/Components';
import { useState } from "react";
import "./App.css";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;


function App() {
  return (
    <div className="App">
    <Components/>
    </div>
  );

}

export default App;


/*
function App() {
  const [cartVisibility, setCartVisible] = useState(false);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addProductToCart = (product) => {
    const updatedCart = [...productsInCart, { ...product, count: 1 }];
    setProductsInCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (productId, count) => {
    const updatedCart = productsInCart.map((product) =>
      product.id === productId ? { ...product, count } : product
    );
    setProductsInCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveProduct = (productId) => {
    const updatedCart = productsInCart.filter((product) => product.id !== productId);
    setProductsInCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCartButtonClick = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <div className="App">
      <Components
      
        cartVisibility={cartVisibility}
        setCartVisible={setCartVisible}
        productsInCart={productsInCart}
        addProductToCart={addProductToCart}
        handleQuantityChange={handleQuantityChange}
        handleRemoveProduct={handleRemoveProduct}
      
      />
    </div>
  );
  }*/



