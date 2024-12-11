import React, { useEffect, useState } from "react";
import { getOrdersByUserEmail } from "../../Services/UsersOrders"; 
import "../../App.css";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchUserOrders = async () => {
     
        const userOrders = await getOrdersByUserEmail(); //load from the service
        setOrders(userOrders);
      
    };

    fetchUserOrders();
  }, []);

  
//display the past orders
  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <ul>
        {orders.map((order) => {
          order.get("Desserts"); 
          return (
            <div className="order-areas">
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Order Date: {order.get("createdAt").toLocaleDateString()}</p>
            </li>
            </div>
          );
        })}
      </ul>
      )}
    </div>
  );
};

export default UserOrders;