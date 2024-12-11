import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CustOrders from './CustOrders.js';
import LogoutButton from "../Auth/LogoutButton";

//show the customers orders but only if they are logged in
const Orders = () => {
    return (
        <div>
            <Footer />
            
            <CustOrders /> 
                <br />
                <p>
                    If you would like to make a new order, go back to our other
                    <Link to="/Desserts"> Desserts </Link>
                </p>
                <LogoutButton /> 

        </div>
    );
}

export default Orders;
