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

            {/* Skills Section - moved from separate component */}
            <div className="resume-skills-left">
                <h3 className="resume-heading">BACKEND & ARCHITECTURE</h3>
                <div className="design-skills">
                    <div className="ist">
                        <div className="coral-draw">
                            <span>PYTHON / DJANGO / DRF</span>
                            <span className="percentage per-95">95%</span>
                        </div>
                        <div className="graph-div">
                            <div className="fill fill-95"></div>
                        </div>
                    </div>
                    <div className="ist">
                        <div className="coral-draw">
                            <span>SYSTEM ARCHITECTURE</span>
                            <span className="percentage per-92">92%</span>
                        </div>
                        <div className="graph-div">
                            <div className="fill fill-92"></div>
                        </div>
                    </div>
                    <div className="ist">
                        <div className="coral-draw">
                            <span>REST API DEVELOPMENT</span>
                            <span className="percentage per-94">94%</span>
                        </div>
                        <div className="graph-div">
                            <div className="fill fill-94"></div>
                        </div>
                    </div>
                    <div className="ist">
                        <div className="coral-draw">
                            <span>POSTGRESQL / DATABASE DESIGN</span>
                            <span className="percentage per-90">90%</span>
                        </div>
                        <div className="graph-div">
                            <div className="fill fill-90"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="resume-skills-right">
                <h3 className="resume-heading">FRONTEND & DEVOPS</h3>
                <div className="design-skills">
                    <div className="ist">
                        <div className="coral-draw">
                            <span>REACT / NEXT.JS / TYPESCRIPT</span>
                            <span className="percentage per-93">93%</span>
                        </div>
                        <div className="graph-div">
                            <div className="fill fill-93"></div>
                        </div>
                    </div>
                    <div className="ist">
                        <div className="coral-draw">
                            <span>REACT NATIVE (MOBILE)</span>
                            <span className="percentage per-88">88%</span>
                        </div>
                        <div className="graph-div">
                            <div className="fill fill-88"></div>
                        </div>
                    </div>
                    <div className="ist">
                        <div className="coral-draw">
                            <span>DOCKER / CONTAINERIZATION</span>
                            <span className="percentage per-91">91%</span>
                        </div>
                        <div className="graph-div">
                            <div className="fill fill-91"></div>
                        </div>
                    </div>
                    <div className="ist">
                        <div className="coral-draw">
                            <span>REDIS / RABBITMQ / WEBSOCKETS</span>
                            <span className="percentage per-87">87%</span>
                        </div>
                        <div className="graph-div">
                            <div className="fill fill-87"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeInfoBlock;
