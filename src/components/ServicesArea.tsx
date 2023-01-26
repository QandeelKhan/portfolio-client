import React from "react";
import PhoneIcon from "./icons/PhoneIcon";
import PhotographyIcon from "./icons/PhotographyIcon";
import ResponsivedesignIcon from "./icons/ResponsivedesignIcon";
import WebdesignIcon from "./icons/WebdesignIcon";
import WebdevelopmentIcon from "./icons/WebdevelopmentIcon";
import "./service-area.css";

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
                        Expert in Python and Django with a passion for building
                        enterprise-level web applications that drive business
                        growth.
                    </span>
                </div>
                <div className="skills">
                    <WebdesignIcon />
                    <span className="skills-heading"> Web Design</span>
                    <span className="skills-description">
                        A skilled web designer, I utilize tools like Figma and
                        Adobe XD to create visually compelling and user-friendly
                        interfaces that drive engagement and business success.
                    </span>
                </div>
                <div className="skills">
                    <ResponsivedesignIcon />
                    <span className="skills-heading"> Responsive Design</span>
                    <span className="skills-description">
                        I design responsive websites that adapt to any screen
                        size with my expertise in the latest responsive design
                        techniques.
                    </span>
                </div>
                <div className="skills">
                    <PhoneIcon />
                    <span className="skills-heading">
                        Mobile App Development
                    </span>
                    <span className="skills-description">
                        With proficiency in React Native and Python, I develop
                        high-performing and user-friendly cross-platform mobile
                        applications.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServicesArea;
