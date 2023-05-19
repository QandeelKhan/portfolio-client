import React from "react";
import whatsappLogo from "../assets/images/wa.png";

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        // Logic to redirect user to WhatsApp
        window.open(
            "https://api.whatsapp.com/send?phone=03157051720",
            "_blank"
        );
    };

    return (
        <div className="whatsapp-button-container">
            <button onClick={handleWhatsAppClick}>
                <img src={whatsappLogo} alt="WhatsApp" />
            </button>
        </div>
    );
};

export default WhatsAppButton;
