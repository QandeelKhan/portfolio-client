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
                        <span className="uiux-dumy-text">
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
