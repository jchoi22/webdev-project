import { useEffect, useState } from "react";
import { getOrderCount } from "../../Services/Order"; // Ensure the path is correct
import Footer from "../Footer/Footer";

const OrdersNum = () => {
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchOrderCount = async () => {
      const count = await getOrderCount();
      setOrderCount(count);
    };

    fetchOrderCount();
  }, []);

  return (
    <div>
      
      <p>{orderCount} orders and counting!</p>
      
    </div>
  );
};

export default OrdersNum;  