import React from "react";

const PrevBtn: React.FC = () => {
    return (
        <nav className="post-navigation" aria-label=" ">
            <div className="nav-links">
                <i
                    className="fa fa-chevron-left prev-icon"
                    aria-hidden="true"
                ></i>
                <button rel="prev">
                    <span className="post-nav-next post-nav-text">Prev</span>
                </button>
            </div>
        </nav>
    );
};

export default PrevBtn;
