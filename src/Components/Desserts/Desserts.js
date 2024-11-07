import './Desserts.css'; 
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";

const Desserts = () => {
    return (
        <div>
            <h1>Menu</h1>
            <Footer />
            <p style={{ margin: "1rem 0" }}>
                Browse through the various options before you make a decision on which dessert to order!
            </p>

            <h3>Our Options:</h3>
            <br />
            <h4>Cookies:</h4>
            <div className="images-flex">
                {[
                    {
                        src: "../images/bb_cookie2.png",
                        alt: "brown butter cookie",
                        title: "Brown Butter Chip Cookies",
                        description: "A twist on classic chocolate chip cookies where the butter is perfectly caramalized before baking"
                    },
                    {
                        src: "../images/cookie_sand.JPG",
                        alt: "mini choc chip cookie with vanilla ice cream",
                        title: "The mini sam",
                        description: "A mini version of your favorite from childhood. Two warm chocolate chip cookies sandwiching a generous scoop of vanilla ice cream"
                    },
                    {
                        src: "../images/funfetti.png",
                        alt: "funfetti cookie",
                        title: "Fun-tastic funfetti cookie",
                        description: "A delicious sugar cookie jam packed with you favorite assortment of sprinkles"
                    },
                    {
                        src: "../images/oatmeal_cookie.png",
                        alt: "oatmeal choc chip cookie",
                        title: "Oat of this world",
                        description: "The best mix of chocoloate and oats brings a hearty but delicious cookie from our kitchen to your stomach"
                    },
                    {
                        src: "../images/snowmen_cookie.png",
                        alt: "snowmen sugar cookies",
                        title: "Frosting the snowman",
                        description: "This cookie will surely get you in the holiday spirit. A sweet sugar cookie with bittercream frosting and a smile to make you smile"
                    },
                    {
                        src: "../images/twix.png",
                        alt: "twix bar equivalent",
                        title: "Shortbread dream",
                        description: "A personal play on a classic. This shortbread cookie with chocolate and homemade caramel is to die for!"
                    },
                    {
                        src: "../images/val_cookies.jpg",
                        alt: "valentines cookies",
                        title: "Sweet on you",
                        description: "A valentines themed sugar cookie for your favorite person on this day. Send a sweet to you friend, your sweetheart, or any special someone"
                    }
                ].map((flower, index) => (
                    <div className="images" key={index}>
                        <img src={flower.src} alt={flower.alt} width="150" height="200" />
                        <h4>{flower.title}</h4>
                        <p>{flower.description}</p>
                    </div>
                ))}
            </div>
            <br />
            <h4>Cakes:</h4>
            <div className="images-flex">
                {[
                    {
                        src: "../images/easter_cake.JPG",
                        alt: "easter themed cake",
                        title: "Holiday cake",
                        description: "Get a customized cake for whatever holiday you are celebrating! Any flavor and any frosting ... so long as we have availabilty"
                    },
                    {
                        src: "../images/birthday_1.png",
                        alt: "birthday cake",
                        title: "BIrthday Cake",
                        description: "Have someone you want to celebrate. Order their birthday cake here!"
                    }
                ].map((flower, index) => (
                    <div className="images" key={index}>
                        <img src={flower.src} alt={flower.alt} width="150" height="200" />
                        <h4>{flower.title}</h4>
                        <p>{flower.description}</p>
                    </div>
                ))}
            </div>

            <br />
            <h4>Other:</h4>
            <div className="images-flex">
                {[
                    {
                        src: "../images/pie.png",
                        alt: "apple pie",
                        title: "Caramel APple Pie",
                        description: "This award winning caramel apple pie is perfect for any occasion. If you want to celebrate a holiday or to just celebrate the week."
                    },
                    {
                        src: "../images/meringue.png",
                        alt: "blue meringues",
                        title: "Tear drop meringues",
                        description: "Try our meringues today. Multiple color options available for the perfect mix of cruchy and soft"
                    },
                    {
                        src: "../images/peach_crumble.png",
                        alt: "peach crumble",
                        title: "Just Peachy",
                        description: "A seasonal dessert that is perfect for the end of summer. When the peaches are ripe, this crumble is unbeatable"
                    }
                ].map((flower, index) => (
                    <div className="images" key={index}>
                        <img src={flower.src} alt={flower.alt} width="150" height="200" />
                        <h4>{flower.title}</h4>
                        <p>{flower.description}</p>
                    </div>
                ))}
            </div>

            <br />
            <p style={{ fontSize: "35px" }}>
                Check back for more options...But if you're happy now, you can always
                <Link to = "/Orders"> ORDER HERE </Link>
            </p>
        </div>
    );
}

export default Desserts;