import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainList = ({ desserts }) => {
  // State to handle the comments in the textarea
  const [comments, setComments] = useState("Give us feedback!!!");

  return (
    <div>
      <p>
        Welcome to Jaylen and Lucy's Bake shop website. From this page you are
        able to browse through different treats using the
        <Link to="/Desserts"> Desserts </Link> link and then order
        by using the <Link to="/Orders">Order Forms</Link> link.
      </p>
      <br />
      <div className="header-photos">
        <ul>
          {desserts.slice(0, 3).map((dessert) => (
            <li key={dessert.id}>
              <img
                src={`/images/${dessert.imgName}`}
                alt={`${dessert.dessertDetails}'s picture`}
              />
            </li>
          ))}
        </ul>
      </div>
      <br />
      <form action="#" className="submit-form">
        <p>
          We are so happy that you chose to shop with us today! If you have any
          questions, concerns, or comments feel free to leave them below!
        </p>
        <textarea
          name="comments"
          cols="20"
          rows="4"
          value={comments} // Set the value prop
          onChange={(e) => setComments(e.target.value)} // Handle change
        />
        <input type="submit" name="button" />
      </form>
      
    </div>
  );
};

export default MainList;
