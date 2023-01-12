import React from "react";

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
                    <span className="pole-left-text-to">2022</span>
                    <div className="resume-text-holder">
                        <h3 className="resume-left-text-heading">
                            Lead Backend Engineer
                        </h3>
                        <h4 className="rsm-left-text-subheading">
                            INFOSYS IIT
                        </h4>
                        <span className="resume-text">
                            I am a Python and JavaScript developer with having
                            bachelor's in Computer Science (B.S). from GC
                            University
                            <br />
                            <br />
                        </span>
                    </div>
                    <span className="pole-left-text-from">2022</span>
                </div>
            </div>
            <div className="resume-info">
                <h3 className="resume-heading">{props.mainHeadingRight}</h3>
                <div className="resume-right-text-container">
                    <span className="pole-text-right">2020</span>
                    <div className="resume-text-holder">
                        <h3 className="resume-right-text-heading">
                            Lead Backend Engineer
                        </h3>
                        <h4 className="rsm-right-text-subheading">
                            INFOSYS IIT
                        </h4>
                        <span className="resume-text">
                            I am a Python and JavaScript developer with having
                            bachelor's in Computer Science (B.S). from GC
                            University
                            <br />
                            <br />
                        </span>
                    </div>
                    <span className="pole-left-text-from">2022</span>
                </div>
            </div>
        </div>
    );
};

export default ResumeInfoBlock;
