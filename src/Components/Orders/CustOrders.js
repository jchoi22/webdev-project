import React, { useEffect, useState } from "react";
import { getOrdersByUserEmail } from "../../Services/UsersOrders"; 

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchUserOrders = async () => {
     
        const userOrders = await getOrdersByUserEmail();
        setOrders(userOrders);
      
    };

    fetchUserOrders();
  }, []);

  
//need to fix this part because it does not show the dessert title 
  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <ul>
        {orders.map((order) => {
          const desserts = order.get("Desserts"); 
          return (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Order Details: {desserts?.title}</p> 
              <p>Order Date: {order.get("createdAt").toLocaleDateString()}</p>
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
};

export default UserOrders;