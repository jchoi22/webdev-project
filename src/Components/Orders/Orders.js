import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import OrdersNum from './OrdersNum';
import { getOrderCount } from '../../Services/Order.js'; // Import the dessert service


const Orders = () => {
    return (
        <div>
            <h1>Order Form</h1>
            <Footer />
            <OrdersNum />
            <br />

            {/* Selection for order can be made here with dropdown */}
            <form action="#" className="submit-form">
                <p>
                    Please fill out the following to submit which flowers you would like to
                    order. If you still need more time to look, please look at our
                    <Link to="/Desserts"> Desserts </Link>
                </p>
                <select name="Arrangement Options">
                    <option value="brown butter">Brown Butter Chip Cookies</option>
                    <option value="the mini sam">The Mini Sam</option>
                    <option value="Funfetti">Fun-tastic Funfetti Cookie</option>
                    <option value="Oat of this World">Oat of This World</option>
                    <option value="Frosting the Snowman">Frosting the Snowman</option>
                    <option value="Shortbread Dream">Shortbread Dream</option>
                </select>
                {/* Need to add submit button to actually send results */}
                <input type="submit" name="button" />
            </form>
            <br />
            <br />

            {/* Add additional option to submit a custom order */}
            <form action="#" className="submit-form">
                <p>
                    If you would prefer to make a custom order, please submit what you are
                    looking for here, and we will get back to you as soon as we can with
                    pricing and flower options. You can also add a photo if what you are
                    looking for below.
                </p>
                <textarea name="comments" cols="20" rows="4">
                    Personalized Arrangements...
                </textarea>
                <br />
                <input type="submit" name="button" />
            </form>
            <br />
            {/* or they can upload pictures of what they are looking for */}
            <form action="#" className="choose-file">
                <p>Upload photos of what you had in mind here:</p>
                <input type="file" />
                <input type="submit" value="Upload" name="button" />
            </form>
        </div>
    );
}

export default Orders;
