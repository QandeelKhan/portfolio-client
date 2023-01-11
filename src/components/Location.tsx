import React from "react";

const Location: React.FC = (props) => {
    return (
        <>
            <div className="location-area">
                <div className="telegram box">
                    <i className="fa-brands fa-telegram location-icons"></i>
                    <span>com.qandeelhaider@gmail.com</span>
                </div>
                <div className="location box">
                    <i className="fa-solid fa-location-dot location-icons"></i>
                    <span>University Road SGD, Pakistan</span>
                </div>
                <div className="contact box">
                    <i className="fa-solid fa-phone-flip location-icons"></i>
                    <span>(+92) 315 70 51720</span>
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143138.321925042!2d59.96986053030338!3d30.067981477326814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1673374249560!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    // style="border:0;"
                    // allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
};

export default Location;
