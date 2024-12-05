import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartVisible, setCartVisible] = useState(false);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const addProductToCart = (product) => {
    const newProduct = { ...product, count: 1 };
    setProductsInCart([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProductsInCart((prevState) =>
      prevState.map((item) =>
        item.id === productId ? { ...item, count } : item
      )
    );
  };

  const onProductRemove = (product) => {
    setProductsInCart((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartVisible,
        toggleCartVisibility,
        productsInCart,
        addProductToCart,
        onQuantityChange,
        onProductRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};