import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../../components/PageTemplate";
import { BarChart } from "../../components/BarChart";
import { DoughnutChart } from "../../components/DoughnutChart";
import "../../components/css/order-history.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { AoBarChart } from "../../components/AoBarChart";
import OrderHistoryIcon from "../../components/icons/CPModeIcons/OrderHistoryIcon";

const OrderHistory = () => {
    const {
        orderId,
        orderCount,
        orderType,
        completionStatus,
        paymentStatus,
        orderDescription,
        projectDescription,
        projectName,
        totalPrice,
        orderCreatedAt,
        orderDueDate,
        orderUpdatedAt,
        orderError,
        activeStatus,
        aoActiveStatus,
        aoPaymentStatus,
        aoOrderCount,
        aoFrontendProgress,
        aoBackendProgress,
        aoDesignProgress,
    } = useSelector((state: RootState) => state.order);
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
                    {/* {allOrders.map((order:any) => (
                    ))} */}
                    <div className="order-container">
                        <div className="order-details">
                            <div className="project-name">
                                <span className="border">Project Name</span>:{" "}
                                <span>Our Demo Project</span>
                            </div>
                            <div className="project-desc">
                                <span className="border">Project </span>{" "}
                                <span className="border">Description</span> :{" "}
                                <span>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus reiciendis
                                    itaque rerum nisi dolorum in perferendis nam
                                    illum corporis deleniti at dolores et,
                                    tenetur eligendi ipsa consequatur dolore
                                    odio vitae!
                                </span>
                            </div>
                            <div className="order-date ">
                                <span className="border">Ordered At</span> :{" "}
                                <span>10/10/2022</span>
                            </div>
                            <div className="complete-date">
                                <span className="border">Completed At</span> :{" "}
                                <span>10/10/2022</span>
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
                    <div className="order-container">
                        <div className="order-details">
                            <div className="project-name">
                                <span className="border">Project Name</span>:{" "}
                                <span>Our Demo Project</span>
                            </div>
                            <div className="project-desc">
                                <span className="border">Project </span>{" "}
                                <span className="border">Description</span> :{" "}
                                <span>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus reiciendis
                                    itaque rerum nisi dolorum in perferendis nam
                                    illum corporis deleniti at dolores et,
                                    tenetur eligendi ipsa consequatur dolore
                                    odio vitae!
                                </span>
                            </div>
                            <div className="order-date ">
                                <span className="border">Ordered At</span> :{" "}
                                <span>10/10/2022</span>
                            </div>
                            <div className="complete-date">
                                <span className="border">Completed At</span> :{" "}
                                <span>10/10/2022</span>
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
                </div>
            </PageTemplate>
        </>
    );
};

export default OrderHistory;
