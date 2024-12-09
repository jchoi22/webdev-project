import React, { useEffect, useState } from "react";
import Parse from "parse";
import OrdersNum from "./OrdersNum.js"

const EmployeeDash = () => {
    const [feedback, setFeedback] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbackAndOrders = async () => {
            try {
                setLoading(true);

                // Fetch feedback
                const Feedback = Parse.Object.extend("Feedback");
                const feedbackQuery = new Parse.Query(Feedback);
                const feedbackResults = await feedbackQuery.find();
                const feedbackData = feedbackResults.map(feedback => ({
                    id: feedback.id,
                    submission: feedback.get("Submission"),
                    createdAt: feedback.createdAt
                }));

                // Fetch customer orders
                const CustomerOrders = Parse.Object.extend("CustomerOrders");
                const ordersQuery = new Parse.Query(CustomerOrders);
                const ordersResults = await ordersQuery.find();
                const ordersData = ordersResults.map(order => ({
                    id: order.id,
                    email: order.get("Email"),
                    totalPrice: order.get("TotalPrice"),
                    desserts: order.get("Desserts"),
                    createdAt: order.createdAt
                }));

                setFeedback(feedbackData);
                setOrders(ordersData);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to load data.");
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbackAndOrders();
    }, []);

    if (loading) return <p>Loading dashboard data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="employee-dashboard">
            <h1>Employee Dashboard</h1>

            <OrdersNum /> {/*Added this but can easily take out */}
            
            {/* feedback section */}
            <section>
                <h2>User Feedback</h2>
                {feedback.length === 0 ? (
                    <p>No feedback available.</p>
                ) : (
                    <ul>
                        {feedback.map(item => (
                            <li key={item.id}>
                                <strong>Submission:</strong> {item.submission} <br />
                                <strong>Date:</strong> {new Date(item.createdAt).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Orders Section */}
            <section>
                <h2>Customer Orders</h2>
                {orders.length === 0 ? (
                    <p>No orders available.</p>
                ) : (
                    <ul>
                        {orders.map(order => (
                            <li key={order.id}>
                                <strong>Email:</strong> {order.email} <br />
                                <strong>Total Price:</strong> ${order.totalPrice.toFixed(2)} <br />
                                <strong>Desserts:</strong>
                                <ul>
                                    {order.desserts.map((dessert, index) => (
                                        <li key={index}>
                                            {dessert.title} - Qty: {dessert.quantity}, Price: ${dessert.price}
                                        </li>
                                    ))}
                                </ul>
                                <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default EmployeeDash;
