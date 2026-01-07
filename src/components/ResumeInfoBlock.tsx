import React, { useState } from "react";
import "./css/resume-info-block.css";
import ResumeItem from "./ResumeItem";

interface Achievement {
    id: number;
    text: string;
    metrics: string;
}

interface ExperienceItem {
    id: number;
    position: string;
    company: string;
    logo: string;
    startDate: { month: string; year: string };
    endDate: { month: string; year: string };
    description: string;
    achievements: Achievement[];
    technologies: string[];
    companyUrl: string;
}

interface EducationItem {
    id: number;
    degree: string;
    school: string;
    logo: string;
    startDate: { month: string; year: string };
    endDate: { month: string; year: string };
    description: string;
    schoolUrl: string;
}

interface headingProps {
    experience: ExperienceItem[];
    education: EducationItem[];
}

const ResumeInfoBlock: React.FC<headingProps> = (props) => {
    const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
    const [expandedEducation, setExpandedEducation] = useState<number | null>(null);
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    const toggleExperience = (id: number) => {
        setExpandedExperience(expandedExperience === id ? null : id);
        setExpandedEducation(null);
    };

    const toggleEducation = (id: number) => {
        setExpandedEducation(expandedEducation === id ? null : id);
        setExpandedExperience(null);
    };

    return (
        <div className="main-resume-container">
            <div className="resume-left-info">
                <h3 className="resume-heading">EXPERIENCE</h3>
                {props.experience.map((exp) => (
                    <ResumeItem
                        key={exp.id}
                        item={{ ...exp, type: 'experience' as const }}
                        isExpanded={expandedExperience === exp.id}
                        onToggle={toggleExperience}
                        hoveredTech={hoveredTech}
                        onTechHover={setHoveredTech}
                    />
                ))}
            </div>

            <div className="resume-right-info">
                <h3 className="resume-heading">EDUCATION</h3>
                {props.education.map((edu) => (
                    <ResumeItem
                        key={edu.id}
                        item={{ ...edu, type: 'education' as const }}
                        isExpanded={expandedEducation === edu.id}
                        onToggle={toggleEducation}
                        hoveredTech={hoveredTech}
                        onTechHover={setHoveredTech}
                    />
                ))}
            </div>
        </div>
    );
};

export default ResumeInfoBlock;