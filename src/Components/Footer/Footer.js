import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Parse from "parse";
import { IoCart } from "react-icons/io5";
import { useCartContext } from "../Cart/CartContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { productsInCart, toggleCartVisibility } = useCartContext();
  const user = Parse.User.current();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Handler for actions requiring login
  const handleProtectedClickMyAccount = (action) => {
    if (user?.authenticated) {
      action();
    } else {
      setShowModal(true);
    }
  };

  const handleProtectedClickCart = (action) => {
    if (user?.authenticated) {
      action();
    } else {
      setShowModal(true);
    }
  };

  const handleGoToLogin = () => {
    navigate("/auth/login");
    setShowModal(false);
  };

  const handleGoBack = () => {
    setShowModal(false);
  };

  return (
    <footer>
      <nav>
        <ul className="navigation">
          <li className="order-link">
            <button
              className="navigation-link"
              onClick={() => handleProtectedClickMyAccount(() => navigate("/Orders"))}
            >
              My Account
            </button>
          </li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Desserts"> Desserts </Link>
          </li>
          <li>
            <button
              className="icon-cart"
              onClick={() => handleProtectedClickCart(toggleCartVisibility)}
            >
              <IoCart size={47} />
              {productsInCart && productsInCart.length > 0 && (
                <span className="product-count-bubble">
                  {productsInCart.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
      
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            
            <p>You need to log in to access this page. Would you like to log in?</p>
            <button onClick={handleGoToLogin}>Go to Login</button>
            < br />
            < br />
            <button onClick={handleGoBack} className="close-btn">Go Back</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
