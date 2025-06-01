import React from "react";
import "./css/left-pole.css";

interface DateObj {
    month: string;
    year: string;
}

interface LeftPoleProps {
    from: DateObj;
    to: DateObj;
}

const LeftPole: React.FC<LeftPoleProps> = ({ from, to }) => {
    return (
        <div className="pole-wrapper">
            <div className="line-container">
                <div className="circle top-circle"></div>
                <div className="line"></div>
                <div className="circle bottom-circle"></div>
            </div>
            
            <div className="text-container">
                <div className="date-group top-date">
                    <span className="date">
                        {from.month} <span className="separator">~</span> {from.year}
                    </span>
                </div>
                <div className="date-group bottom-date">
                    <span className="date">
                        {to.month} <span className="separator">~</span> {to.year}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LeftPole;