import React from "react";
import "./css/left-pole.css";
interface Props {
    from: string;
    to: string;
}

const LeftPole: React.FC<Props> = (props) => {
    return (
        <>
            <div className="line-container">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="text-container">
                <div className="from">{props.from}</div>
                <div className="to">{props.to}</div>
            </div>
        </>
    );
};

export default LeftPole;
