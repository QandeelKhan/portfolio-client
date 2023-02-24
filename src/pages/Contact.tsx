import React, { FormEvent } from "react";
import Location from "../components/Location";
import emailjs from "emailjs-com";
import PageTemplate from "../components/PageTemplate";
import "./css/contact.css";
import { Helmet } from "react-helmet";
import ContactEnvelopeIcon from "../components/icons/ResumeModeIcons/ContactEnvelopIcon";

const Contact = () => {
    function sendEmail(e: FormEvent<HTMLFormElement> & { target: any }) {
        console.log(e.currentTarget.type);
        e.preventDefault();
        emailjs
            .sendForm(
                "portfolio.1995",
                "portfolio_template.1995",
                e.currentTarget,
                "YoR-HqOyLGpenVETJ"
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
        e.target.reset();
    }

    return (
        <>
            <Helmet>
                <title>
                    Contact Qandeel Khan - Full Stack Developer in Sargodha
                </title>
                <meta
                    name="description"
                    content="Get in touch with Qandeel Khan, a Full Stack Developer based in Sargodha. Contact him via phone, email, or submit a form for assistance."
                />
                <meta
                    name="keywords"
                    content="Qandeel Khan, Full Stack Developer, Contact, Sargodha, Phone, Email, Submit, Form, Assistance, Location, Map"
                />
                <meta name="author" content="Qandeel Khan" />
                <meta name="robots" content="index,follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
            <form id="contact-form" onSubmit={sendEmail}>
                <PageTemplate
                    iconComponent={<ContactEnvelopeIcon />}
                    pageName="Contact Me."
                >
                    <div className="lets-talk-area ">
                        <div className="subheading">
                            <span>LET'S TALK</span>
                        </div>
                        <div className="name-email-area">
                            <div className="field-holder">
                                <input
                                    type="text"
                                    name="user_name"
                                    className="form-input"
                                    required
                                />
                                <label>Name</label>
                            </div>
                            <div className="field-holder">
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="messsage-area">
                            <textarea required name="message" />
                            <label className="text-area-label">
                                How can we help you?
                            </label>
                            <button
                                type="submit"
                                className="send-messsage-btn"
                                value="Send Message"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                    {/* need refactor with props */}
                    <Location />
                </PageTemplate>
            </form>
        </>
    );
};

export default Contact;
