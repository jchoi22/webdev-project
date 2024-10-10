import {useEffect, useState } from "react";
import { getAllDesserts } from "../../Services/DessertList.js";
import MainList from "./MainList.js";

const Main = () => {
  const [desserts, setDesserts] = useState([]);

  // useEffect(() => {
  //   getAllDesserts().then((desserts) => {
  //     setDesserts(desserts);
  //   });
  // }, []);

  return (
    <div>
      <h1>Jaylen and Lucy's Bake Shop</h1>
      <nav>
        <ul class="navigation">
          <li><a href="./">Home</a></li>
          <li><a href="./">Order Forms</a></li>
          <li><a href="./">Bakery Options</a></li>
        </ul>
      </nav>
      <MainList desserts={desserts} />
    </div>
  );
};

export default Main;
  