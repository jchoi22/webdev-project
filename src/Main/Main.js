import {useEffect, useState } from "react";
import { getAllDesserts } from "../../Services/DessertList.js";
import MainList from "./MainList.js";
//sorry I am at Grace Hopper right now and very confused so I apologize, I know this is wrong
const Main = () => {
  const [desserts, setDesserts] = useState([]);

  // useEffect(() => {
  //   getAllDesserts().then((desserts) => {
  //     setDesserts(desserts);
  //   });
  // }, []);
  useEffect(() => {
    const parseDesserts = async () =>{
        const Dessert = Parse.Object.extend('parse', 
        {
            getAllDesserts: function () {
              return this.get('name') //idk I'm sorry
            }
        })
    }

  })
  
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
  