import logo from './logo.svg';
import './App.css';
import Main from './Main/Main.js';
import * as ENV from "./environments.js";
import Parse from "parse";

Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL(ENV.SERVER_URL);

function App() {
  return (
    <div className="App">
    <Main/>
    </div>
  );
}

export default App;
