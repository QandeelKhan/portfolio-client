import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./css/changing-text.css";

const ChangingText: React.FC = () => {
    const [text] = useTypewriter({
        words: [
            "Author",
            "Full-Stack Engineer",
            "Python Expert",
            "Javascript Developer",
        ],
        loop: 0, // or false to run animation infinitely
        typeSpeed: 40,
        deleteSpeed: 30,
    });

    return (
        <div className="animation-text">
            <div className="fixed-text">I am&nbsp;</div>
            <div className="dynamic-text">
                <span className="animated-text">{text}</span>
                <span>
                    <Cursor cursorStyle="|" />
                </span>
            </div>
        </div>
    );
};

export default ChangingText;
