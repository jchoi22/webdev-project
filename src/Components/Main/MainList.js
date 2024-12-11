import { useState } from "react";

import Parse from "parse";

const MainList = ({ desserts }) => {
  // State to handle the comments in the textarea
  const [comments, setComments] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!comments.trim() || comments === "") {
      alert("Please enter valid feedback before submitting.");
      return;
    }

    const Feedback = new Parse.Object("Feedback");
    Feedback.set("Submission", comments);

    try {
      await Feedback.save();
      alert("Feedback submitted successfully!");
      setComments(""); // Clear the form
    } catch (error) {
      console.error("Error saving feedback:", error);
      alert("There was an error saving your feedback. Please try again.");
    }
  };
  return (
    <div>
      <br />
      <div className="header-photos">
        <ul>
          {desserts.slice(0, 3).map((dessert) => (
            <li key={dessert.id}>
              <img
                src={`/images/${dessert.imgName}`}
                alt={`${dessert.dessertDetails}`}
              />
            </li>
          ))}
        </ul>
      </div>
      <br />
      <form action="#" className="submit-form" onSubmit={handleSubmit}>
        <p>
          We are so happy that you chose to shop with us today! If you have any
          questions, concerns, or comments feel free to leave them below!
        </p>
        <textarea
          name="comments"
          cols="20"
          rows="4"
          placeholder="Give us feedback!!!" // Use placeholder here
          value={comments} // Set the value prop
          onChange={(e) => setComments(e.target.value)} // Handle change
        />
        <input type="submit" name="button" />
      </form>
      
    </div>
  );
};

export default MainList;
