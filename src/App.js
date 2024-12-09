import * as ENV from "./environments.js";
import Parse from "parse";
import Components from './Components/Components';
import { useState } from "react";
import "./App.css";
import { CartProvider } from "./Components/Cart/CartContext";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;


function App() {
  return (
    <CartProvider>
    <div className="App">
    <Components/>
    </div>
    </CartProvider>
  );

}

export default App;






