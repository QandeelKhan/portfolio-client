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
                        <span className="uiux-dummy-text">
                            Dolor reprehenderit aut repudiandae maiores
                            recusandae. Consequatur dolor nisi labore commodi
                            ipsa? Excepturi velit laboriosam at voluptatibus
                            cupiditate est vel. Dolorem praesentium itaque
                            fugiat placeat quas consequatur? Obcaecati natus
                            rerum
                            <br />
                            <br />
                            Consectetur consectetur nesciunt nesciunt blanditiis
                            amet? Quod quis unde aliquid excepturi laudantium?
                            Illo architecto aliquam velit illo magnam neque
                            perferendis sint Incidunt eius ipsa inventore labore
                            eos velit. Minus hic magni reiciendis necessitatibus
                            ex Quidem officia deleniti accusamus obcaecati
                            dolores. Porro culpa quibusdam impedit porro
                            praesentium excepturi. Alias ab consequatur?
                        </span>
                    </div>
                    <div className="about-right-info">
                        <h3 className="personel-info-heading">
                            Personal Information
                        </h3>
                        <ul>
                            <li className="personal-info-list">
                                <span className="personal-info-title">
                                    <span> Name </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span>Qandeel Khan</span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Age </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span>26 Years</span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Residence </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span> Punjab, Pakistan </span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Address </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span> 123 Lorem Ipsum </span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Email </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span>example@example.com</span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span> Phone </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span> (+92) 315 7051 720 </span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Freelance </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span> Available </span>
                                </span>
                            </li>
                        </ul>
                        <a
                            target="_blank"
                            href={require("../components/icons/resume.pdf")}
                            className="download-resume-btn"
                        >
                            DOWNLOAD RESUME
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
