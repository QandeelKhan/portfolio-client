import React from "react";
import "./css/resume-item.css";
import LeftPole from "./LeftPole";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaStar, FaCode, FaTrophy, FaBuilding } from "react-icons/fa";

interface Achievement {
    id: number;
    text: string;
    metrics: string;
}

interface BaseItem {
    id: number;
    logo: string;
    startDate: { month: string; year: string };
    endDate: { month: string; year: string };
    description: string;
}

interface ExperienceItem extends BaseItem {
    type: 'experience';
    position: string;
    company: string;
    achievements: Achievement[];
    technologies: string[];
    companyUrl: string;
}

interface EducationItem extends BaseItem {
    type: 'education';
    degree: string;
    school: string;
    schoolUrl: string;
}

type ResumeItemData = ExperienceItem | EducationItem;

interface ResumeItemProps {
    item: ResumeItemData;
    isExpanded: boolean;
    onToggle: (id: number) => void;
    hoveredTech: string | null;
    onTechHover: (tech: string | null) => void;
}

const ResumeItem: React.FC<ResumeItemProps> = ({
    item,
    isExpanded,
    onToggle,
    hoveredTech,
    onTechHover
}) => {
    const truncateDescription = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + "...";
    };

    const renderTechStack = (tech: string[]) => (
        <div className="tech-stack">
            {tech.map((t, index) => (
                <div
                    key={index}
                    className={`tech-tag ${ hoveredTech === t ? 'highlighted' : '' }`}
                    onMouseEnter={() => onTechHover(t)}
                    onMouseLeave={() => onTechHover(null)}
                >
                    {t}
                    {hoveredTech === t && <div className="tech-popup">{t}</div>}
                </div>
            ))}
        </div>
    );

    const renderAchievements = (achievements: Achievement[]) => (
        <div className="achievements-container">
            <div className="section-title">
                <FaTrophy className="icon" />
                <h4>Key Achievements</h4>
            </div>
            <ul className="achievements-list">
                {achievements.map((ach) => (
                    <li key={ach.id}>
                        <FaStar className="achievement-icon" />
                        <div className="achievement-text">
                            <span>{ach.text}</span>
                            <div className="achievement-metrics">{ach.metrics}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

    const title = item.type === 'experience' ? item.position : item.degree;
    const subtitle = item.type === 'experience' ? item.company : item.school;
    const url = item.type === 'experience' ? item.companyUrl : item.schoolUrl;

    return (
        <div className={`resume-item ${ isExpanded ? 'expanded' : '' }`}>
            <div
                className="expand-icon-top-right"
                onClick={() => onToggle(item.id)}
                title={isExpanded ? "Collapse details" : "Expand details"}
                onKeyDown={(e) => e.key === 'Enter' && onToggle(item.id)}
                tabIndex={0}
                role="button"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            <div className="item-header" onClick={() => onToggle(item.id)}>
                <LeftPole from={item.startDate} to={item.endDate} />
                <div className="item-content">
                    <div className="position-info">
                        <h3 className="rsm-txt-heading">{title}</h3>
                        <h4 className="rsm-txt-subheading">
                            {subtitle}
                            {url && (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="company-link"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            )}
                        </h4>
                    </div>

                    <div className="logo-container">
                        {item.logo ? (
                            <img
                                src={item.logo}
                                alt={`${ subtitle } logo`}
                                className="company-logo"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/companies-logo/logo-placeholder.jpg';
                                    e.currentTarget.alt = 'Logo not available';
                                }}
                            />
                        ) : (
                            <div className="logo-placeholder">
                                <FaBuilding />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="description-container">
                <p className="description-text">
                    {isExpanded ? item.description : (
                        <>
                            {truncateDescription(item.description)}
                            {item.description.length > 150 && (
                                <span
                                    className="see-more"
                                    onClick={() => onToggle(item.id)}
                                    onKeyDown={(e) => e.key === 'Enter' && onToggle(item.id)}
                                    tabIndex={0}
                                    role="button"
                                    aria-label="See more"
                                >
                                    {' '}see more...
                                </span>
                            )}
                        </>
                    )}
                </p>
            </div>

            <div className={`item-details ${ isExpanded ? 'visible' : '' }`}>
                {isExpanded && item.type === 'experience' && (
                    <>
                        {item.achievements.length > 0 && renderAchievements(item.achievements)}
                        <div className="tech-container">
                            <div className="section-title">
                                <FaCode className="icon" />
                                <h4>Technologies Used</h4>
                            </div>
                            {renderTechStack(item.technologies)}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResumeItem;