import React from "react";
import { Helmet } from "react-helmet";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../../components/PageTemplate";
import "../css/place-order.css";
import PlaceOrderForm from "../../components/PlaceOrderForm";

const PlaceOrder = () => {
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
                iconComponent={<AboutUserIcon />}
                pageName="Place Your Order Please."
            >
                <div className="place-order-container">
                    <h1 style={{ textAlign: "center" }}>
                        Place Your Order Please.
                    </h1>
                    <PlaceOrderForm />
                </div>
            </PageTemplate>
        </>
    );
};

export default PlaceOrder;
