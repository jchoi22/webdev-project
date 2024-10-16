import logo from './logo.svg';
import * as ENV from "./environments.js";
import Parse from "parse";
import Components from './Components/Components';

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
