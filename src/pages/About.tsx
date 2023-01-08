import React from "react";
import AboutUserIcon from "../components/icons/AboutUser";

const About: React.FC = (props: any) => {
    return (
        <section id="about" className="about-container">
            <div className="main-about-area">
                <div className="about-head-logo-area">
                    <h1 className="aboutme-heading">About Me</h1>
                    <AboutUserIcon />
                </div>
                <div className="all-information"></div>
            </div>
        </section>
    );
};

export default About;
