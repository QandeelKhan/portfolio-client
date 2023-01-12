import React from "react";

const SkillsResume = () => {
    return (
        <>
            <div className="skills-area">
                <div className="left-design-area">
                    <span className="skills-heading">DESIGN SKILLS</span>
                    <div className="design-skills">
                        <div className="ist">
                            <div className="coral-draw">
                                <span>CORAL DRAW</span>
                                <span className="percentage per-91">91%</span>
                            </div>
                            <div className="graph-div">
                                <div className="fill fill-91"></div>
                            </div>
                        </div>
                        <div className="ist">
                            <div className="coral-draw">
                                <span>PHOTOSHOP</span>
                                <span className="percentage per-82">82%</span>
                            </div>
                            <div className="graph-div">
                                <div className="fill fill-82"></div>
                            </div>
                        </div>
                        <div className="ist">
                            <div className="coral-draw">
                                <span>FIGMA</span>
                                <span className="percentage per-94">94%</span>
                            </div>
                            <div className="graph-div">
                                <div className="fill fill-92"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-coding-area">
                    <div className="left-design-area">
                        <span className="skills-heading">CODING SKILLS</span>
                        <div className="design-skills">
                            <div className="ist">
                                <div className="coral-draw">
                                    <span>HTML5</span>
                                    <span className="percentage per-83">
                                        83%
                                    </span>
                                </div>
                                <div className="graph-div">
                                    <div className="fill fill-83"></div>
                                </div>
                            </div>
                            <div className="ist">
                                <div className="coral-draw">
                                    <span>CSS3</span>
                                    <span className="percentage per-75">
                                        75%
                                    </span>
                                </div>
                                <div className="graph-div">
                                    <div className="fill fill-75"></div>
                                </div>
                            </div>
                            <div className="ist">
                                <div className="coral-draw">
                                    <span>JAVASCRIPT</span>
                                    <span className="percentage per-92">
                                        92%
                                    </span>
                                </div>
                                <div className="graph-div">
                                    <div className="fill fill-92"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsResume;
