import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { IoCart } from "react-icons/io5";
import Cart from "../Cart/Cart"

const Footer = ({ productsInCart, onCartButtonClick }) => (
  <footer>
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
            <Link to = "/Orders"> Order </Link>
        </li>
        <li>
            <Link to = "/Desserts"> Desserts </Link>
        </li>
        <li>
        <button className="icon-cart" onClick={onCartButtonClick}>
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

export default Footer;
