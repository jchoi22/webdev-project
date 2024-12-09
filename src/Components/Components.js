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
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import { useCartContext } from "./Cart/CartContext";



//pass through the cart so that all pages can see it
export default function Components(){
  const {
    cartVisibility,
    toggleCartVisibility,
    productsInCart,
    onQuantityChange,
    onProductRemove,
    setCartVisible,
} = useCartContext();
  return (
    <Router>
      <div>
               
                {cartVisibility && (
                    <Cart
                        visibility={cartVisibility}
                        products={productsInCart}
                        onClose={() => toggleCartVisibility()}
                        onQuantityChange={onQuantityChange}
                        onProductRemove={onProductRemove}
                        toggleCartVisibility={toggleCartVisibility}
                        setCartVisible={setCartVisible}
                    />
                )}

                
                <Routes>
                    <Route path="/" element={<Navigate to="/Main" replace />} />

                    <Route path="/auth" element={<AuthModule />} />
                    <Route path="/auth/register" element={<AuthRegister />} />
                    <Route path="/auth/login" element={<AuthLogin />} />

                    <Route path="/Main" element={<ProtectedRoute element={Main} />} />
                    <Route path="/Desserts" element={<ProtectedRoute element={Desserts} />} />
                    <Route path="/Orders" element={<ProtectedRoute element={Orders} />} />
                    <Route path="/Checkout" element={<ProtectedRoute element={Checkout} />} />

                    
                    <Route path="/EmployeeDash" element={<ProtectedRoute element={EmployeeDash} />} />

                    
                    <Route path="*" element={<Navigate to="/auth" replace />} />
                </Routes>

               
                
            </div>
    </Router>
  );
}

