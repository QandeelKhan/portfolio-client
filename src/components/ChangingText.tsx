import React, { useState, useEffect } from "react";

interface Props {
    text: string[];
}

const ChangingText: React.FC<Props> = ({ text }) => {
    const [currentText, setCurrentText] = useState(text[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % text.length);
            setCurrentText(text[currentIndex]);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, text]);

    return (
        <div className="animated-text">
            <div className="fixed-text">I am</div>
            <div className="dynamic-text">
                <span className="animated-text">{currentText}</span>
            </div>
        </div>
    );
};

export default ChangingText;
