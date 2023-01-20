import React from "react";
import "../components/resume.css";
import LicenseResume from "../components/icons/LicenseResume";
import ResumeInfoBlock from "../components/ResumeInfoBlock";
import ResumeSkills from "../components/SkillsSection";
import { motion } from "framer-motion";

const Resume: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
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
                        <ResumeInfoBlock
                            mainHeadingLeft=""
                            mainHeadingRight=""
                        />
                        <ResumeInfoBlock
                            mainHeadingLeft=""
                            mainHeadingRight=""
                        />
                        <ResumeSkills />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Resume;
