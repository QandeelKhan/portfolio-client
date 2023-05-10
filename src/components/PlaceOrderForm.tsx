import { useState } from "react";
import { useCreateOrderMutation } from "../redux/services/userAuthApi";

const PlaceOrderForm = () => {
    const [order, setOrder] = useState({
        order_type: "",
        project_name: "",
        project_description: "",
        due_date: "",
        total_price: "",
        zoom_meeting: "",
        meeting_time: "",
    });

    const [createOrder, { isLoading, error }] = useCreateOrderMutation();

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        createOrder(order)
            .unwrap()
            .then((data) => {
                console.log("Order created successfully!", data);
                // reset the form after successful submission
                setOrder({
                    order_type: "",
                    project_name: "",
                    project_description: "",
                    due_date: "",
                    total_price: "",
                    zoom_meeting: "",
                    meeting_time: "",
                });
            })
            .catch((error) => console.error("Order creation failed", error));
    };

    // Generate an array of timestamps for the next 6 days
    const now = new Date();
    const next6Days = Array.from({ length: 6 }, (_, i) => {
        const date = new Date(now);
        date.setDate(date.getDate() + i);
        return date.getTime();
    });

    return (
        <form onSubmit={handleSubmit} className="place-order-form">
            <label className="order-type">
                Order Type:
                <select
                    name="order_type"
                    value={order.order_type}
                    onChange={handleInputChange}
                >
                    <option value="">Select Order Type</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="blog">Blog</option>
                    <option value="custom">Custom</option>
                </select>
            </label>

            <label className="project-name">
                Project Name:
                <input
                    type="text"
                    name="project_name"
                    value={order.project_name}
                    onChange={handleInputChange}
                    required
                />
            </label>

            <label className="place-project-desc">
                Project Description:
                <textarea
                    name="project_description"
                    value={order.project_description}
                    onChange={handleInputChange}
                    required
                />
            </label>

            <label className="due-date">
                Due Date:
                <input
                    type="datetime-local"
                    name="due_date"
                    value={order.due_date}
                    onChange={handleInputChange}
                    required
                />
            </label>

            <label className="total-price">
                Total Price:
                <input
                    type="number"
                    name="total_price"
                    value={order.total_price}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <select
                name="zoom_meeting"
                value={order.zoom_meeting}
                onChange={handleInputChange}
            >
                <option value="">Schedule a Zoom Meeting?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <label className="meeting-time">
                Meeting Time:
                <input
                    type="time"
                    name="meeting_time"
                    value={order.meeting_time}
                    onChange={handleInputChange}
                    required
                />
            </label>

            <button
                type="submit"
                disabled={isLoading}
                className="create-order-btn"
            >
                {isLoading ? "Loading..." : "Create Order"}
            </button>

            {/* {error && <div>Error: {error.message}</div>} */}
        </form>
    );
};
export default PlaceOrderForm;
