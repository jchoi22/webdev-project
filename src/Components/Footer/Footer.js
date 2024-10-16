import { Link } from "react-router-dom";

const Footer = () => (
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
      </ul>
    </nav>
  </footer>
);

export default Footer;
