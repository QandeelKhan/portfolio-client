import React from "react";
import "../components/resume.css";
import LicenseResume from "../components/icons/LicenseResume";
import ResumeInfoBlock from "../components/ResumeInfoBlock";
import ResumeSkills from "../components/SkillsSection";
import { motion } from "framer-motion";
import AboutUserIcon from "../components/icons/AboutUser";
import PageTemplate from "../components/PageTemplate";

const Resume: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <PageTemplate iconComponent={<AboutUserIcon />} pageName="Resume.">
                <ResumeInfoBlock
                    mainHeadingLeft="EXPERIENCE"
                    mainHeadingRight="EDUCATION"
                />
                <ResumeInfoBlock mainHeadingLeft="" mainHeadingRight="" />
                <ResumeInfoBlock mainHeadingLeft="" mainHeadingRight="" />
                <ResumeSkills />
            </PageTemplate>
        </motion.div>
    );
};

export default Resume;
