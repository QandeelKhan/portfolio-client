import React from "react";
import whatsappLogo from "../assets/images/wa.png";

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        // International format with country code for Pakistan (+92)
        // Removes leading 0 and adds country code
        window.open(
            "https://api.whatsapp.com/send?phone=923157051720",
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
