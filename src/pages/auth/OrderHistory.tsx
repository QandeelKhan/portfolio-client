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
                <h1>You have {orderCount} order</h1>
                <div className="order-history-container">
                    <div className="order-container">
                        <div className="order">
                            <div className="order-details">
                                <h3>project Name: Our Demo Project</h3>
                                <h3>
                                    project Description: Our Demo description{" "}
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus reiciendis
                                    itaque rerum nisi dolorum in perferendis nam
                                    illum corporis deleniti at dolores et,
                                    tenetur eligendi ipsa consequatur dolore
                                    odio vitae!
                                </h3>
                            </div>
                            <h3 className="order-assets">Project Assets: </h3>
                        </div>
                    </div>
                    <div className="order-container">
                        <div className="order">
                            <div className="order-details">
                                <h3>project Name: Our Demo Project</h3>
                                <h3>
                                    project Description: Our Demo description{" "}
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus reiciendis
                                    itaque rerum nisi dolorum in perferendis nam
                                    illum corporis deleniti at dolores et,
                                    tenetur eligendi ipsa consequatur dolore
                                    odio vitae!
                                </h3>
                            </div>
                            <h3 className="order-assets">Project Assets: </h3>
                        </div>
                    </div>
                </div>
            </PageTemplate>
        </>
    );
};

export default OrderHistory;
