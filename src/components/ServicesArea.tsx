import React from "react";
import WebdevelopmentIcon from "./icons/WebdevelopmentIcon";

const ServicesArea: React.FC = (props) => {
    return (
        // <div className="service-area-container ">
        <div className="srevice-area">
            <h3 className="subheading">
                <span>Services</span>
            </h3>
            <div className="services">
                <div className="skills">
                    <WebdevelopmentIcon />
                    <span> Web Development</span>
                    <span>
                        Amet aspernatur delectus maxime ducimus similique
                        Ratione asperiores corporis provident aut libero
                    </span>
                </div>
                <div className="skills">
                    <WebdevelopmentIcon />
                    <span> Web Development</span>
                    <span>
                        Amet aspernatur delectus maxime ducimus similique
                        Ratione asperiores corporis provident aut libero
                    </span>
                </div>
                <div className="skills">
                    <WebdevelopmentIcon />
                    <span> Web Development</span>
                    <span>
                        Amet aspernatur delectus maxime ducimus similique
                        Ratione asperiores corporis provident aut libero
                    </span>
                </div>
                <div className="skills">
                    <WebdevelopmentIcon />
                    <span> Web Development</span>
                    <span>
                        Amet aspernatur delectus maxime ducimus similique
                        Ratione asperiores corporis provident aut libero
                    </span>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default ServicesArea;
