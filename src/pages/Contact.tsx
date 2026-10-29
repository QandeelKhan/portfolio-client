import React, { FormEvent, useState } from "react";
import Location from "../components/Location";
import emailjs from "emailjs-com";
import PageTemplate from "../components/PageTemplate";
import "./css/contact.css";
import { Helmet } from "react-helmet";
import ContactEnvelopeIcon from "../components/icons/ResumeModeIcons/ContactEnvelopIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    
    function sendEmail(e: FormEvent<HTMLFormElement> & { target: any }) {
        e.preventDefault();
        
        // Prevent double submission
        if (isSubmitting) return;
        
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        emailjs
            .sendForm(
                "portfolio.1995",
                "portfolio_template.1995",
                e.currentTarget,
                "YoR-HqOyLGpenVETJ"
            )
            .then((res) => {
                console.log('Email sent successfully:', res);
                setSubmitStatus('success');
                setIsSubmitting(false);
                e.target.reset();
                
                // Show success toast
                toast.success('Message sent successfully! I\'ll get back to you soon.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })
            .catch((err) => {
                console.error('Email send error:', err);
                setSubmitStatus('error');
                setIsSubmitting(false);
                
                // Show error toast
                toast.error('Failed to send message. Please try again or contact me directly at com.qandeelhaider@gmail.com', {
                    position: "top-right",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
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
                                    placeholder=" "
                                    required
                                />
                                <label>Name</label>
                            </div>
                            <div className="field-holder">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder=" "
                                    required
                                />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="messsage-area">
                            <textarea required name="message" placeholder=" " />
                            <label className="text-area-label">
                                How can we help you?
                            </label>
                            <button
                                type="submit"
                                className="send-message-btn"
                                disabled={isSubmitting}
                                style={{
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
                                        SENDING...
                                    </>
                                ) : (
                                    'SEND MESSAGE'
                                )}
                            </button>
                        </div>
                    </div>
                    {/* need refactor with props */}
                    <Location />
                </PageTemplate>
            </form>
            <ToastContainer />
        </>
    );
};

export default Contact;
