import { Link } from "react-router-dom";

import { IoCart } from "react-icons/io5";

import { useCartContext } from "../Cart/CartContext";

const Footer = () => {
  const { productsInCart, toggleCartVisibility } = useCartContext();
  return (
  <footer>
    <nav>
      <ul className="navigation">
        <li> 
          <Link to="/"> Home </Link>
        </li>
        <li>
            <Link to = "/Orders"> Your Orders </Link>
        </li>
        <li>
            <Link to = "/Desserts"> Desserts </Link>
        </li>
        <li>
        <button className="icon-cart" onClick={toggleCartVisibility}>
            <IoCart size={47} />
            {productsInCart && productsInCart.length > 0 && (
              <span className="product-count-bubble">{productsInCart.length}</span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  </footer>
);
  };

export default Footer;
