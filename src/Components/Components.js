import Main from "./Main/Main";
import Orders from "./Orders/Orders";
import Desserts from "./Desserts/Desserts";
import Cart from "./Cart/Cart";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import MainList from "./Main/MainList.js";

export default function Components() {
  return (
    <Router>
      <Routes>
        
       <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        

        <Route path="/" element={<ProtectedRoute element={Main} />} />
        <Route path="/Orders" element={<ProtectedRoute element={Orders} />} />
        <Route path="/Desserts" element={<ProtectedRoute element={Desserts} />} />
        <Route path="/Cart" element={<ProtectedRoute element={Cart} />} />

        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}
