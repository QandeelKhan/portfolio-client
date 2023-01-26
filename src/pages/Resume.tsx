import React from "react";
import "../components/resume.css";
import ResumeInfoBlock from "../components/ResumeInfoBlock";
import ResumeSkills from "../components/SkillsSection";
import AboutUserIcon from "../components/icons/AboutUser";
import PageTemplate from "../components/PageTemplate";
import { education, experience } from "../components/resumeData";
import ThemeWrapper from "../components/ThemeWrapper";

const Resume: React.FC = () => {
    return (
        <PageTemplate iconComponent={<AboutUserIcon />} pageName="Resume.">
            <ResumeInfoBlock experience={experience} education={education} />
            <ResumeSkills />
        </PageTemplate>
    );
};
export default Resume;
