import React from "react";
import "../components/resume.css";
import LicenseResume from "../components/icons/LicenseResume";
import ResumeInfoBlock from "../components/ResumeInfoBlock";
import ResumeSkills from "../components/SkillsSection";

const Resume = () => {
    return (
        <section id="resume-section">
            <div className="about-container">
                <div className="main-about-area">
                    <div className="about-head-logo-area">
                        <h1 className="aboutme-heading">Resume.</h1>
                        <LicenseResume />
                    </div>
                    <ResumeInfoBlock
                        mainHeadingLeft="EXPERIENCE"
                        mainHeadingRight="EDUCATION"
                    />
                    <ResumeInfoBlock mainHeadingLeft="" mainHeadingRight="" />
                    <ResumeInfoBlock mainHeadingLeft="" mainHeadingRight="" />
                    <ResumeSkills />
                </div>
            </div>
        </section>
    );
};

export default Resume;
