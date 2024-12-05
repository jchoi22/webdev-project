import Main from "./Main/Main";
import Orders from "./Orders/Orders";
import Desserts from "./Desserts/Desserts";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import EmployeeDash from "./EmployeeDash/EmployeeDash";


export default function Components({
  cartVisibility,
  setCartVisible,
  productsInCart,
  addProductToCart,
  handleQuantityChange,
  handleRemoveProduct,
}) {
  return (
    <Router>
      <Routes>
        
       <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />

        <Route path="/Main" element={<ProtectedRoute element={Main} />} />
        <Route path="/Desserts" element={<ProtectedRoute element={Desserts} />} />
        <Route path="/Orders" element={<ProtectedRoute element={Orders} />} />
        <Route path="/Checkout" element={<ProtectedRoute element={Checkout} />} />

        {/* This should have the auth for employees only applied*/}         
        <Route path="/EmployeeDash" element={<ProtectedRoute element={EmployeeDash} />} />
        

        

        
       

        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

/*
        <Route path="/" element={<ProtectedRoute
              element={Main}
              cartVisibility={cartVisibility}
              setCartVisible={setCartVisible}
              productsInCart={productsInCart}
            />
          }
        />
        <Route
          path="/Orders"
          element={
            <ProtectedRoute
              element={Orders}
              cartVisibility={cartVisibility}
              setCartVisible={setCartVisible}
              productsInCart={productsInCart}
            />
          }
        />
        <Route
          path="/Desserts"
          element={
            <ProtectedRoute
              element={Desserts}
              cartVisibility={cartVisibility}
              setCartVisible={setCartVisible}
              productsInCart={productsInCart}
              addProductToCart={addProductToCart}
            />
          }
        /> */
