import * as ENV from "./environments.js";
import Parse from "parse";
import Components from './Components/Components';
import "./App.css";
import { CartProvider } from "./Components/Cart/CartContext";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;

//wrapped in cart provider so that you can pass props to all pages and cart can exist globally
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






