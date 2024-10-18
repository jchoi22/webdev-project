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
            <div className="images-flex">
                {[
                    {
                        src: "../images/pink.JPG",
                        alt: "pink flower arrangement with pom daisies and carnations",
                        title: "Pack A Pink",
                        description: "Pack a punch of pure pink with this variety of pink pom daisies and Carnations surrounded by wax flower"
                    },
                    {
                        src: "../images/purple.JPG",
                        alt: "purple flower arrangement with leafy filler",
                        title: "The Hulk",
                        description: "A variety of Hydrangeas, Carnations, and leafy greens to provide superpower beauty to any room"
                    },
                    {
                        src: "../images/tulips.JPG",
                        alt: "Hydrangeas, tulips, and eucalyptus",
                        title: "To Be Or Not Tulip",
                        description: "Eucalyptus, Hydrangeas, and the star of the show Tulips. This springy arrangement is great for any occasion or recipient"
                    },
                    {
                        src: "../images/christmas.JPG",
                        alt: "Hydrangea and roses",
                        title: "Christmas Cheer",
                        description: "This green and red arrangement is a beautiful mix of Hydrangeas, Roses, and Alstromerias. It's a wonderful gift for your family, friends, or even for yourself!"
                    },
                    {
                        src: "../images/green.JPG",
                        alt: "Hydrangea and roses",
                        title: "Super Spring",
                        description: "This arrangement of Hydrangeas, Alstromerias, and Eucalyptus will bring anyone out of their winter slumber and get them in the spring mood"
                    },
                    {
                        src: "../images/peonies.jpg",
                        alt: "peonies",
                        title: "Pretty Peony",
                        description: "Your 'it girls' favorite flower. There is nothing more classy or timeless as a bouquet of Peonies. Make someone the happiest most chic person today"
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
