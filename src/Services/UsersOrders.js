import Parse from "parse";

export const getOrdersByUserEmail = async () => {
  const Order = Parse.Object.extend("CustomerOrders"); 
  const query = new Parse.Query(Order);

  // get the current user
  const currentUser = Parse.User.current();
  if (!currentUser) {
    console.error("No user is logged in.");
    return []; // return if no user logged it (should work with auth and this should not be a problem but for now)
  }

  const userEmail = currentUser.get("email");

  
  query.equalTo("Email", userEmail);

  try {
    const orders = await query.find(); 
    return orders; // return orders
  } catch (error) {
    console.error("Error while fetching orders for user: ", error);
    return []; // if error
  }
};