import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import OrdersNum from '../EmployeeDash/OrdersNum.js';
import { getOrderCount } from '../../Services/Order.js'; // Import the dessert service
import CustOrders from './CustOrders.js';

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
               
        </div>
    );
}

export default Orders;
