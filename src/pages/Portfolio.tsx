import React from "react";
import BriefcaseIcon from "../components/icons/BriefcaseIcon";
// import LicenseIcon from "../components/icons/LicenseIcon";
import PortfolioProject from "../components/PortfolioProject";

const Portfolio = () => {
    return (
        <section id="resume-section">
            <div className="about-container">
                <div className="main-about-area">
                    <div className="about-head-logo-area">
                        <h1 className="aboutme-heading">Portfolio.</h1>
                        <BriefcaseIcon />
                    </div>
                    <PortfolioProject />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
