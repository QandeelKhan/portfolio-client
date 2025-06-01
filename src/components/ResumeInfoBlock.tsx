import React from "react";
import "./css/resume-info-block.css";
import LeftPole from "./LeftPole";


interface DateObj {
    month: string;
    year: string;
}

interface headingProps {
    experience: {
        position: string;
        company: string;
        startDate: DateObj;
        endDate: DateObj;
        description: string;
    }[];
    education: {
        degree: string;
        school: string;
        startDate: DateObj;
        endDate: DateObj;
        description: string;
    }[];
}

const ResumeInfoBlock = (props: headingProps) => {
    return (
        <div className="main-resume-container">
            <div className="resume-left-info">
                <h3 className="resume-heading">EXPERIENCE</h3>
                {props.experience.map((exp, idx) => (
                    <div className="resume-left-text-container">
                        <>
                            <LeftPole from={exp.startDate} to={exp.endDate} />
                            <div className="resume-left-text-container-second-child">
                                <div key={idx}>
                                    <div className="resume-text-holder">
                                        <h3 className="rsm-txt-heading">
                                            {exp.position}
                                        </h3>
                                        <h4 className="rsm-txt-subheading">
                                            {exp.company}
                                        </h4>
                                        <span className="resume-text">
                                            {exp.description}
                                            <br />
                                            <br />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                ))}
            </div>
            <div className="resume-right-info">
                <h3 className="resume-heading">EDUCATION</h3>
                {props.education.map((edu, idx) => (
                    <div className="resume-right-text-container">
                        <>
                            <LeftPole from={edu.startDate} to={edu.endDate} />
                            <div key={idx}>
                                <span className="pole-txt-right-to">
                                    {/* from {edu.startDate} */}
                                </span>
                                <div className="resume-text-holder">
                                    <h3 className="rsm-txt-heading">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="rsm-txt-subheading">
                                        {edu.school}
                                    </h4>
                                    <span className="resume-text">
                                        {edu.description}
                                        <br />
                                        <br />
                                    </span>
                                </div>
                                <span className="pole-txt-from">
                                    {/* to {edu.endDate} */}
                                </span>
                            </div>
                        </>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResumeInfoBlock;
