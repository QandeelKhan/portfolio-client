import React from "react";
import "./css/resume.css";
import ResumeInfoBlock from "../components/ResumeInfoBlock";
import ResumeSkills from "../components/SkillsSection";
import AboutUserIcon from "../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../components/PageTemplate";
import { education, experience } from "../components/data/resumeData";
import { Helmet } from "react-helmet";

const Resume: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Qandeel Khan | Full Stack Developer Resume</title>
                <meta
                    name="description"
                    content="View Qandeel Khan's resume as a Full Stack Developer skilled in Python Django, React, TypeScript, Redux and DevOps. Expertise in developing and deploying web applications."
                />
                <meta
                    name="keywords"
                    content="Qandeel Khan, Full Stack Developer, Python Django, React, TypeScript, Redux, DevOps, Web Applications, Resume"
                />
            </Helmet>
            <PageTemplate iconComponent={<AboutUserIcon />} pageName="Resume.">
                <ResumeInfoBlock
                    experience={experience}
                    education={education}
                /> 
                <ResumeSkills />
            </PageTemplate>
        </>
    );
};
export default Resume;
