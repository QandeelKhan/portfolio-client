import React from "react";
import AboutUserIcon from "../components/icons/AboutUser";
import ContactEnvelopeIcon from "../components/icons/ContactEnvelopIcon";

const Contact = () => {
    return (
        <section id="contact-section">
            <div className="about-container">
                <div className="main-about-area">
                    {/* need refactor with props this part as component and common classes convenssion with other same components */}
                    <div className="about-head-logo-area">
                        <h1 className="aboutme-heading">Contact Me.</h1>
                        <ContactEnvelopeIcon />
                    </div>
                    {/* need refactor with props */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
