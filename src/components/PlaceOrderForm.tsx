import { useState } from "react";
import { useCreateOrderMutation } from "../redux/services/userAuthApi";

const PlaceOrderForm = () => {
    const [order, setOrder] = useState({
        order_type: "",
        project_name: "",
        project_description: "",
        due_date: "",
        total_price: "",
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
                });
            })
            .catch((error) => console.error("Order creation failed", error));
    };

    return (
        <form onSubmit={handleSubmit} className="place-order-form">
            <label className="order-type">
                Order Type:
                <input
                    type="text"
                    name="order_type"
                    value={order.order_type}
                    onChange={handleInputChange}
                    required
                />
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

            <button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Create Order"}
            </button>

            {/* {error && <div>Error: {error.message}</div>} */}
        </form>
    );
};
export default PlaceOrderForm;
