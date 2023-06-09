import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/clients-slide.css";

const ClientsSlide: React.FC = (props) => {
    return (
        <div className="clients-slide">
            <h3 className="subheading">
                <span>CLIENTS</span>
            </h3>
            {/* owl */}
            <div className="slider-client" style={{ maxWidth: "1050px" }}>
                <Slider
                    dots={false}
                    slidesToShow={3}
                    // slidesToScroll={1}
                    arrows={false}
                >
                    <div className="slide-container">
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="/images/logo/marketers-logo.png"
                                    alt="Client-1"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    style={{
                                        color: "whitesmoke",
                                        height: "150px",
                                        width: "150px",
                                    }}
                                    decoding="async"
                                    src="/images/logo/jojo.png"
                                    alt="Client 2"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    style={{
                                        color: "whitesmoke",
                                        height: "150px",
                                        width: "150px",
                                    }}
                                    decoding="async"
                                    src="/images/logo/commerce-season.jpeg"
                                    alt="Client 3"
                                />{" "}
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
            {/* owl */}
        </div>
    );
};

export default ClientsSlide;
