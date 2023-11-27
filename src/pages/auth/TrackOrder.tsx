import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../../components/PageTemplate";
import "../../components/css/track-order.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { AoBarChart } from "../../components/AoBarChart";

const TrackOrder: React.FC = () => {
    const {
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
                iconComponent={<AboutUserIcon />}
                pageName="Track Your Order."
            >
                {console.log(`${aoActiveStatus} active status`)}
                <h1>
                    You have {aoActiveStatus ? `${aoOrderCount}` : "no"} active
                    order
                </h1>

                <div
                    className={`ao-container ${
                        !aoActiveStatus ? "ao-container-inactive" : ""
                    }`}
                >
                    <div className="charts-container">
                        <div className="bar-chart">
                            {/* <BarChart /> */}
                            <AoBarChart
                                designData={aoDesignProgress}
                                frontendData={aoFrontendProgress}
                                backendData={aoBackendProgress}
                            />
                        </div>
                        <div className="payment-area">
                            <div className="payment-status">
                                <span className="payment-text">
                                    Payment Status{" "}
                                </span>
                                :
                                <span className="status-text">
                                    {" "}
                                    {aoPaymentStatus}
                                </span>
                            </div>
                            <div className="source-buttons">
                                <button>Frontend Source Code</button>
                                <button>Backend Source Code</button>
                                <button>Design</button>
                            </div>
                        </div>
                    </div>
                    <div className="modification-area">
                        <a href="/">Need Modification?</a>
                    </div>
                    <div className="modification-desc">
                        <div className="label-text-area">
                            <label className="text-area-label">
                                Description
                            </label>
                            <textarea required name="message" />
                        </div>
                        <button
                            type="submit"
                            className="send-message-btn"
                            value="Send Message"
                        >
                            SEND MESSAGE
                        </button>
                    </div>
                </div>
            </PageTemplate>
            {/* <h1 style={{ textAlign: "center" }}>Track Your Order..</h1> */}
        </>
    );
};

export default TrackOrder;
