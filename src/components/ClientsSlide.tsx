import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ClientsSlide = () => {
    return (
        // <div className="clients-slide-container">
        <div className="clients-slide">
            <h3 className="subheading">
                <span>Clients</span>
            </h3>
            {/* owl */}
            <OwlCarousel
                className="owl-theme owl-loaded owl-drag"
                loop
                margin={10}
                items={5}
                nav
            >
                <div className="item">
                    <div className="client-logo">
                        {" "}
                        <a href="#">
                            {" "}
                            <img
                                decoding="async"
                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client2.png"
                                alt="Client 2"
                            />{" "}
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="client-logo">
                        {" "}
                        <a href="#">
                            {" "}
                            <img
                                decoding="async"
                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client3.png"
                                alt="Client 3"
                            />{" "}
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="client-logo">
                        {" "}
                        <a href="#">
                            {" "}
                            <img
                                decoding="async"
                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client4.png"
                                alt="Client 4"
                            />{" "}
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="client-logo">
                        {" "}
                        <a href="#">
                            {" "}
                            <img
                                decoding="async"
                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client5.png"
                                alt="Client 5"
                            />{" "}
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="client-logo">
                        {" "}
                        <a href="#">
                            {" "}
                            <img
                                decoding="async"
                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client6.png"
                                alt="Client 6"
                            />{" "}
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="client-logo">
                        {" "}
                        <a href="#">
                            {" "}
                            <img
                                decoding="async"
                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client1.png"
                                alt="Client 1"
                            />{" "}
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="client-logo">
                        {" "}
                        <a href="#">
                            {" "}
                            <img
                                decoding="async"
                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client2.png"
                                alt="Client 2"
                            />{" "}
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="client-logo">
                        {" "}
                        <a href="#">
                            {" "}
                            <img
                                decoding="async"
                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client7.png"
                                alt="Client 7"
                            />{" "}
                        </a>
                    </div>
                </div>
            </OwlCarousel>
            {/* owl */}
            {/* <div className="owl-nav disabled">
                    <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                    >
                        <span aria-label="Previous">‹</span>
                    </button>
                </div> */}
        </div>
        // </div>
    );
};

export default ClientsSlide;
