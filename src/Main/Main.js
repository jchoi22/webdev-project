import { useEffect, useState } from "react";
import MainList from './MainList.js';
import { getDesserts } from '../Services/DessertList.js'; // Import the dessert service

const Main = () => {
  const [desserts, setDesserts] = useState([]);

  // Fetching desserts data on component mount
  useEffect(() => {
    const fetchDesserts = async () => {
      const dessertsData = await getDesserts(); // Call the service to fetch data
      setDesserts(dessertsData); // Set the desserts state
    };

    fetchDesserts(); // Invoke fetching function
  }, []); // Empty dependency array to run on mount

  return (
    <div>
      <h1>Jaylen and Lucy's Bake Shop</h1>
      <nav>
        <ul className="navigation">
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
