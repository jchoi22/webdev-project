import Parse from "parse";

// Function to fetch the list number of orders 
export const getOrderCount = async () => {
    const Order = Parse.Object.extend("Order"); // Your Parse class name
    const query = new Parse.Query(Order);
  
    try {
      const count = await query.count(); // Count the number of orders
      return count; // Return the count of order_num
    } catch (error) {
      console.error("Error while counting orders: ", error);
      return 0; // Return 0 if there's an error
    }
  };