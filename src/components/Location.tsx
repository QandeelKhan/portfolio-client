import React from "react";
import "./css/location.css";

const Location: React.FC = (props) => {
    return (
        <>
            <div className="location-area">
                <div className="box">
                    <i className="fa-brands fa-telegram location-icons"></i>
                    <a 
                        href="mailto:com.qandeelhaider@gmail.com"
                        className="contact-link email-link"
                        title="Send me an email"
                    >
                        <span>com.qandeelhaider@gmail.com</span>
                        <i className="fa-solid fa-envelope contact-icon"></i>
                    </a>
                </div>
                <div className="box">
                    <i className="fa-solid fa-location-dot location-icons"></i>
                    <span>PWD, Islamabad , Pakistan</span>
                </div>
                <div className="box">
                    <i className="fa-solid fa-phone-flip location-icons"></i>
                    <a 
                        href="tel:+923157051720"
                        className="contact-link phone-link"
                        title="Call me"
                    >
                        <span>(+92) 315 70 51720</span>
                        <i className="fa-solid fa-phone contact-icon"></i>
                    </a>
                </div>
            </div>
            <div className="map">
                <iframe
                    title="world-map"
                    src="https://maps.google.com/maps?q=33.7188,73.0474&hl=en&z=14&output=embed"
                    width="100%"
                    height="300"
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
};

export default Location;
