import React from "react";
import "./resume-info-block.css";

interface headingProps {
    mainHeadingLeft: string | "";
    mainHeadingRight: string | "";
}

const ResumeInfoBlock = (props: headingProps) => {
    return (
        <div className="main-resume-container">
            <div className="resume-info">
                <h3 className="resume-heading">{props.mainHeadingLeft}</h3>
                <div className="resume-left-text-container">
                    <span className="pole-txt-to">2022</span>
                    <div className="resume-text-holder">
                        <h3 className="rsm-txt-heading">
                            Lead Backend Engineer
                        </h3>
                        <h4 className="rsm-txt-subheading">INFOSYS IIT</h4>
                        <span className="resume-text">
                            I am a Python and JavaScript developer with having
                            bachelor's in Computer Science (B.S). from GC
                            University
                            <br />
                            <br />
                        </span>
                    </div>
                    <span className="pole-txt-from">2022</span>
                </div>
            </div>
            <div className="resume-info">
                <h3 className="resume-heading">{props.mainHeadingRight}</h3>
                <div className="resume-right-text-container">
                    <span className="pole-txt-right-to">2020</span>
                    <div className="resume-text-holder">
                        <h3 className="rsm-txt-heading">
                            Lead Backend Engineer
                        </h3>
                        <h4 className="rsm-txt-subheading">INFOSYS IIT</h4>
                        <span className="resume-text">
                            I am a Python and JavaScript developer with having
                            bachelor's in Computer Science (B.S). from GC
                            University
                            <br />
                            <br />
                        </span>
                    </div>
                    <span className="pole-txt-from">2022</span>
                </div>
            </div>
        </div>
    );
};

export default ResumeInfoBlock;
