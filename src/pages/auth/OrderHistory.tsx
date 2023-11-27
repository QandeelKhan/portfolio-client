import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/PageTemplate";
import "../../components/css/order-history.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import OrderHistoryIcon from "../../components/icons/CPModeIcons/OrderHistoryIcon";
import { ordersDataTypes } from "../../redux/features/ordersSlice";

const OrderHistory: React.FC = () => {
    const { orderCount, aoActiveStatus } = useSelector(
        (state: RootState) => state.order
    );
    const { allOrders } = useSelector((state: RootState) => state.orders);
    useEffect(() => {});
    return (
        <>
            <Helmet>
                <title>My Blog | Programming, Qandeel Khan, and More</title>
                <meta
                    name="description"
                    content="Stay updated with the latest programming knowledge, learn about the life of Qandeel Khan, and more with my blog."
                />
                <meta
                    name="keywords"
                    content="programming, react, django, qandeel khan, devops, redux, typescript, history, blog"
                />
            </Helmet>

            <PageTemplate
                iconComponent={<OrderHistoryIcon />}
                pageName="Your Ordered Projects History."
            >
                {console.log(`${aoActiveStatus} active status`)}
                <h1 className="order-head">You have {orderCount} order</h1>
                <div className="order-history-container">
                    {allOrders.map((order: ordersDataTypes) => (
                        <div className="order-container">
                            <div className="order-details">
                                <div className="project-name">
                                    <span className="border">Project Name</span>
                                    : <span>{order.project_name}</span>
                                </div>
                                <div className="project-desc">
                                    <span className="border">Project </span>{" "}
                                    <span className="border">Description</span>{" "}
                                    : <span>{order.project_description}</span>
                                </div>
                                <div className="order-date ">
                                    <span className="border">Ordered At</span> :{" "}
                                    <span>{order.created_at}</span>
                                </div>
                                <div className="complete-date">
                                    <span className="border">Due Date</span> :{" "}
                                    <span>{order.due_date}</span>
                                </div>
                                <div className="complete-date">
                                    <span className="border">Last Update</span>{" "}
                                    : <span>{order.updated_at}</span>
                                </div>
                            </div>
                            <div className="history-source-code">
                                <span className="project-assets">
                                    Project Assets :
                                </span>
                                <a href="/">Frontend Source Code</a>
                                <a href="/">Backend Source Code</a>
                                <a href="/">Design</a>
                            </div>
                        </div>
                    ))}
                </div>
            </PageTemplate>
        </>
    );
};

export default OrderHistory;
