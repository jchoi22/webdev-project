import { useEffect, useState } from "react";

const MainList = ({ desserts }) => {
  return (
    <div>
      <p>
        Welcome to Jaylen and Lucy's Bake shop website. From this page you are
        able to browse through different treats using the
        <a href="/flowers/index.html"> Dessert Options</a> link and then order
        by using the <a href="/orders/index.html">Order Forms</a> link.
      </p>
      <br />
      <div className="header-photos">
        <ul>
          {desserts.slice(0, 3).map(
            (dessert) => (
              <li key={dessert.id}>
                  <img src={`../images/${dessert.imgName}`} 
                  alt={`${dessert.dessertDetails}'s picture`} />
                
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
        <textarea name="comments" cols="20" rows="4">
Give us feedback!!!</textarea
        >
        <input type="submit" name="button" />
      </form>
      <form action="#" className="submit-form">
        <p>
          Please fill out the following to submit which items you would like to
          order if you still need more time to look please look at our
          <a href="/../flowers/index.html"> Bakery Options</a>
        </p>
        <select name="Arrangment Options">
          <option value="shortcake">Shortcake</option>
          <option value="oatmeal_cookie">Oatmeal Cookie</option>
          <option value="twix">Shortbread Cookie</option>
          <option value="birthday cake">Birthday Cake</option>
          <option value="meringues">Meringues</option>
          <option value="pie">Apple Pie</option>
        </select>
        <input type="submit" name="button" />
      </form>
  
      <form action="#" class="choose-file">
        <p>
          Or if you want something custom, upload photos of what you had in mind
          here:
        </p>
        <input type="file" />
        <input type="submit" value="Upload" name="button" />
      </form>
    </div>
  );
};

export default MainList;