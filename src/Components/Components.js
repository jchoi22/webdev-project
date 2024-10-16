import Main from "./Main/Main"
import Orders from "./Orders/Orders"
import Desserts from "./Desserts/Desserts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Desserts" element={<Desserts />} />
      </Routes>
    </Router>
  );
}
