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
        <li>
          <Link to = "/Cart"> <div className="icon-cart">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                </svg>
                <span>0</span>
            </div></Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
