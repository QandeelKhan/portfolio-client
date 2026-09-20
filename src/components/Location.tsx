import React from "react";
import "./css/location.css";

const Location: React.FC = (props) => {
    return (
        <>
            <div className="location-area">
                <div className="box">
                    <i className="fa-brands fa-telegram location-icons"></i>
                    <span>com.qandeelhaider@gmail.com</span>
                </div>
                <div className="box">
                    <i className="fa-solid fa-location-dot location-icons"></i>
                    <span>PWD, Islamabad , Pakistan</span>
                </div>
                <div className="box">
                    <i className="fa-solid fa-phone-flip location-icons"></i>
                    <span>(+92) 315 70 51720</span>
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
