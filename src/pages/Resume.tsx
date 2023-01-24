import React from "react";
import "../components/resume.css";
import LicenseResume from "../components/icons/LicenseResume";
import ResumeInfoBlock from "../components/ResumeInfoBlock";
import ResumeSkills from "../components/SkillsSection";
import { motion } from "framer-motion";
import AboutUserIcon from "../components/icons/AboutUser";
import PageTemplate from "../components/PageTemplate";
import { education, experience } from "../components/resumeData";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Resume: React.FC = () => {
    return (
        <PageTemplate iconComponent={<AboutUserIcon />} pageName="Resume.">
            <ResumeInfoBlock experience={experience} education={education} />
            <ResumeSkills />
        </PageTemplate>
    );
};
export default Resume;
