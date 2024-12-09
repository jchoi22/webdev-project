import Parse from "parse";


export const getOrderCount = async () => {
    const Order = Parse.Object.extend("CustomerOrders"); 
    const query = new Parse.Query(Order);
  
    try {
      const count = await query.count(); // count the number of orders
      return count; //  count of order_num
    } catch (error) {
      console.error("Error while counting orders: ", error);
      return 0; 
    }
  };