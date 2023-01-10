import React from "react";

const Location: React.FC = (props) => {
    return (
        <>
            <div className="location-area">
                <div className="telegram box">
                    <i className="fa-brands fa-telegram location-icons"></i>
                    <span>example@example.com</span>
                </div>
                <div className="location box">
                    <i className="fa-solid fa-location-dot location-icons"></i>
                    <span>123 Lorem Ipsum, USA</span>
                </div>
                <div className="contact box">
                    <i className="fa-solid fa-phone-flip location-icons"></i>
                    <span>(+1) 123 456 7890</span>
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5944076627347!2d72.7001572143763!3d32.053168127847584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921780215aca161%3A0xf50464012fbae768!2sGovt%20College%20Of%20Commerce%20Sargodha!5e0!3m2!1sen!2s!4v1673373054081!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    // style="border:0;"
                    // allowfullscreen={""}
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
};

export default Location;
