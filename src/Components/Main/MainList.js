import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainList = ({ desserts }) => {
  // State to handle the comments in the textarea
  const [comments, setComments] = useState("Give us feedback!!!");

  return (
    <div>
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
