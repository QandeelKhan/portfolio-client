import React from "react";
import PhotographyIcon from "./icons/PhotographyIcon";
import ResponsivedesignIcon from "./icons/ResponsivedesignIcon";
import WebdesignIcon from "./icons/WebdesignIcon";
import WebdevelopmentIcon from "./icons/WebdevelopmentIcon";

const ServicesArea: React.FC = (props) => {
    return (
        <div className="srevice-area">
            <h3 className="subheading">
                <span>SERVICES</span>
            </h3>
            <div className="services">
                <div className="skills">
                    <WebdevelopmentIcon />
                    <span className="skills-heading"> Web Development</span>
                    <span className="skills-description">
                        Amet aspernatur delectus maxime ducimus similique
                        Ratione asperiores corporis provident aut libero
                    </span>
                </div>
                <div className="skills">
                    <WebdesignIcon />
                    <span className="skills-heading"> Web Design</span>
                    <span className="skills-description">
                        Amet aspernatur delectus maxime ducimus similique
                        Ratione asperiores corporis provident aut libero
                    </span>
                </div>
                <div className="skills">
                    <ResponsivedesignIcon />
                    <span className="skills-heading"> Responsive Design</span>
                    <span className="skills-description">
                        Amet aspernatur delectus maxime ducimus similique
                        Ratione asperiores corporis provident aut libero
                    </span>
                </div>
                <div className="skills">
                    <PhotographyIcon />
                    <span className="skills-heading"> Photography</span>
                    <span className="skills-description">
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
