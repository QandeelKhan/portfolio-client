import React from "react";
import AboutUserIcon from "../components/icons/AboutUser";

const About: React.FC = (props: any) => {
    return (
        <section id="about" className="about-container">
            <div className="main-about-area">
                <div className="about-head-logo-area">
                    <h1 className="aboutme-heading">About Me.</h1>
                    <AboutUserIcon />
                </div>
                <div className="about-all-info">
                    <div className="about-left-info">
                        <h3 className="ui-ux-designer">
                            UI/UX Designer & Developer
                        </h3>
                        <span>
                            Dolor reprehenderit aut repudiandae maiores
                            recusandae. Consequatur dolor nisi labore commodi
                            ipsa? Excepturi velit laboriosam at voluptatibus
                            cupiditate est vel. Dolorem praesentium itaque
                            fugiat placeat quas consequatur? Obcaecati natus
                            rerum
                        </span>
                    </div>
                    <div className="about-right-info">
                        <span className="personel-info-heading">
                            Personal Information
                        </span>
                        <span>
                            Dolor reprehenderit aut repudiandae maiores
                            recusandae. Consequatur dolor nisi labore commodi
                            ipsa? Excepturi velit laboriosam at voluptatibus
                            cupiditate est vel. Dolorem praesentium itaque
                            fugiat placeat quas consequatur? Obcaecati natus
                            rerum
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
