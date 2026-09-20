import React from "react";
import "./css/skills-section.css";

const ResumeSkills: React.FC = () => {
    return (
        <>
            <div className="skills-area">
                <div className="left-design-area">
                    <span className="skills-heading">BACKEND & ARCHITECTURE</span>
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
                <div className="right-coding-area">
                    <div className="left-design-area">
                        <span className="skills-heading">FRONTEND & DEVOPS</span>
                        <div className="design-skills">
                            <div className="ist">
                                <div className="coral-draw">
                                    <span>REACT / NEXT.JS / TYPESCRIPT</span>
                                    <span className="percentage per-93">
                                        93%
                                    </span>
                                </div>
                                <div className="graph-div">
                                    <div className="fill fill-93"></div>
                                </div>
                            </div>
                            <div className="ist">
                                <div className="coral-draw">
                                    <span>REACT NATIVE (MOBILE)</span>
                                    <span className="percentage per-88">
                                        88%
                                    </span>
                                </div>
                                <div className="graph-div">
                                    <div className="fill fill-88"></div>
                                </div>
                            </div>
                            <div className="ist">
                                <div className="coral-draw">
                                    <span>DOCKER / CONTAINERIZATION</span>
                                    <span className="percentage per-91">
                                        91%
                                    </span>
                                </div>
                                <div className="graph-div">
                                    <div className="fill fill-91"></div>
                                </div>
                            </div>
                            <div className="ist">
                                <div className="coral-draw">
                                    <span>REDIS / RABBITMQ / WEBSOCKETS</span>
                                    <span className="percentage per-87">
                                        87%
                                    </span>
                                </div>
                                <div className="graph-div">
                                    <div className="fill fill-87"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeSkills;
