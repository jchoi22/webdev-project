
import './Desserts.css'; 
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import { getDesserts } from "../../Services/DessertList";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart"
// import { IoCart } from "react-icons/io5";
import { useCartContext } from "../Cart/CartContext";


const Desserts = () => {
    const [desserts, setDesserts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); //state for the search

    const { cartVisibility, setCartVisible, productsInCart, addProductToCart, onQuantityChange, onProductRemove } = useCartContext();
    
   
    

    const handleCartButtonClick = () => {
        setCartVisible(true);
      };

    useEffect(() => {
        const fetchDesserts = async () => {
            const data = await getDesserts();
            setDesserts(data);
        };

        fetchDesserts();
    }, []);

    //for the search portion
    const highlightText = (text, term) => { //highlight the term for the search
        if (!term) 
            return text;
        const regex = new RegExp(`(${term})`, "gi");

        return text.replace(regex, '<span class="highlight">$1</span>');
    };


    const renderDessertsByCategory = (category) => {
      
        const filteredDesserts = desserts.filter( //creates a new array only with elements that match
            //put both in lower case, case insensitive
            (dessert) => dessert.dessertCategory === category && (dessert.dessertTitle.toLowerCase().includes(searchTerm.toLowerCase()) || dessert.dessertDesc.toLowerCase().includes(searchTerm.toLowerCase()))

        );

        

        return (
            <div className="images-flex">
                {filteredDesserts.map((dessert) => (
                    <div className="images" key={dessert.id}>
                        <img
                            src={dessert.imgName}
                            alt={dessert.dessertTitle}
                            width="150"
                            height="200"
                        /> 
                        {/* I tried to map elements but was having a lot of trouble so in the future this is something that I could make better and 
                        not use something that literally says dangerous. I will need to work on security in a future iteration */}
                        <h4 className="title" dangerouslySetInnerHTML={{ __html: highlightText(dessert.dessertTitle, searchTerm),}}
                       />
                        <p className="description" dangerouslySetInnerHTML={{ __html: highlightText(dessert.dessertDesc, searchTerm),}}
                       />

                        <br />
                        <p className="price">  Price: ${dessert.dessertPrice.toFixed(2)}</p>
                        <button 
                        className="order-button" 
                        onClick={() => {addProductToCart(dessert)
                            handleCartButtonClick();
                            }}>Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        );
    };

   

    return (
        <div>
                
                {cartVisibility && (
                    <Cart
                    visibility={cartVisibility}
                    products={productsInCart}
                    onClose={() => setCartVisible(false)}
                    onQuantityChange={onQuantityChange}
                    onProductRemove={onProductRemove}
                    
                    />
                )}

                
                <Footer //pass to footer so that you can change what is actually in the cart
                    productsInCart={productsInCart}
                    onCartButtonClick={() => setCartVisible(true)}
                />
                
                
                <h2>Menu</h2>

                
            
            <h3>Our Options:</h3>
            <p>You can hone your search by using the search below...</p>
            <input
               type="text"
               value={searchTerm} //actually set the search term from the submission
               onChange={(e) => setSearchTerm(e.target.value)}
               placeholder="Search desserts..."
               className="search-box"
           />
           <br />
            <p style={{ margin: "1rem 0" }}>
                OR... just scroll through the various options before you make a decision on which dessert to order!
            </p>
            <br />
            

            <h4>Cookies:</h4>
            {renderDessertsByCategory("cookie")}
            <br />

            <h4>Cakes:</h4>
            {renderDessertsByCategory("cake")}
            <br />

            <h4>Other:</h4>
            {renderDessertsByCategory("other")}
            <br />

            <p >
                Check back for more options... But if you're happy now, you can always
                <Link to="/Orders"> ORDER HERE </Link>
            </p>
        </div>
    );
};

export default Desserts;


