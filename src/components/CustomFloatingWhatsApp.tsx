import React, { useState } from "react";
import "./css/custom-floating-whatsapp.css";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

interface CustomFloatingWhatsAppProps {
    phoneNumber: string;
    accountName: string;
    avatar?: string;
    statusMessage?: string;
    chatMessage?: string;
    placeholder?: string;
}

const CustomFloatingWhatsApp: React.FC<CustomFloatingWhatsAppProps> = ({
    phoneNumber,
    accountName,
    avatar = "/images/other/profile-img.jpg",
    statusMessage = "Typically replies within 1 hour",
    chatMessage = "Hi there 👋\n\nHow can I help you?",
    placeholder = "Type a message...",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            const formattedPhone = phoneNumber.replace(/\D/g, "");
            const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
            setMessage("");
            setIsOpen(false);
        }
    };

    const handleQuickMessage = () => {
        const formattedPhone = phoneNumber.replace(/\D/g, "");
        const whatsappUrl = `https://wa.me/${formattedPhone}`;
        window.open(whatsappUrl, "_blank");
        setIsOpen(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="custom-floating-whatsapp">
            {isOpen && (
                <div className="whatsapp-chat-box">
                    <div className="chat-header">
                        <div className="header-content">
                            <img
                                src={avatar}
                                alt={accountName}
                                className="avatar"
                            />
                            <div className="header-info">
                                <h4>{accountName}</h4>
                                <span className="status">{statusMessage}</span>
                            </div>
                        </div>
                        <button
                            className="close-button"
                            onClick={toggleChat}
                            aria-label="Close chat"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="chat-body">
                        <div className="message-bubble">
                            <p>{chatMessage}</p>
                            <span className="message-time">
                                {new Date().toLocaleTimeString("en-US", {
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true,
                                })}
                            </span>
                        </div>
                    </div>

                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="message-input"
                        />
                        <button
                            className="send-button"
                            onClick={handleSendMessage}
                            disabled={!message.trim()}
                            aria-label="Send message"
                        >
                            <FaPaperPlane />
                        </button>
                    </div>

                    <div className="quick-action">
                        <button
                            className="quick-chat-button"
                            onClick={handleQuickMessage}
                        >
                            Start Chat on WhatsApp
                        </button>
                    </div>
                </div>
            )}

            <button
                className={`whatsapp-float-button ${isOpen ? "active" : ""}`}
                onClick={toggleChat}
                aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            >
                <FaWhatsapp />
            </button>
        </div>
    );
};

export default CustomFloatingWhatsApp;
