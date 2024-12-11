import './Main.css';
import { useEffect, useState } from "react";
import MainList from './MainList.js';
import { getDesserts } from '../../Services/DessertList.js'; // Import the dessert service
import Footer from "../Footer/Footer";

const Main = () => {
  const [desserts, setDesserts] = useState([]);

  // fetching desserts data on component mount
  useEffect(() => {
    const fetchDesserts = async () => {
      const dessertsData = await getDesserts(); // call the service to fetch data
      setDesserts(dessertsData); // Set the desserts state
    };

    fetchDesserts(); // invoke fetching function
  }, []); // Empty dependency array to run on mount

  return (
    <div>
    <div id="header">
    <Footer/>
    <h1>Jaylen and Lucy's <br/>Bake Shop</h1>
    </div>
      <MainList desserts={desserts} />
    </div>
  );
};

export default Main;
