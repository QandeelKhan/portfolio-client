import React from "react";

function TopBar() {
    return (
        <div className="top-bar">
            <button className="hamburger-menu">
                <i className="fas fa-bars"></i>
            </button>
            <div className="site-name">Philips Watson</div>
        </div>
    );
}

export default TopBar;
