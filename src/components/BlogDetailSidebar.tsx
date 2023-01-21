import React from "react";

const BlogDetailSidebar = () => {
    return (
        <div className="main-side-container">
            <div className="arrow-div">
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="side-content">
                <div className="search-div">
                    <input type="text" placeholder="Search..." />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <h3>Recent Posts</h3>
                <div className="post-points">
                    <a href="/">
                        <span>Best Way To Design</span>
                    </a>
                    <a href="/">
                        <span>Things I Need To Get Started</span>
                    </a>
                    <a href="/">
                        <span>My Current Workspace</span>
                    </a>
                    <a href="/">
                        <span>Best Place To Travel This Summer</span>
                    </a>
                    <a href="/">
                        <span>Latest UI Trends To Inspired From</span>
                    </a>
                </div>
                <h3>Recent Comments</h3>
                <div className="post-points">
                    <a href="/">
                        <span>Best Way To Design</span>
                    </a>
                    <a href="/">
                        <span>Things I Need To Get Started</span>
                    </a>
                    <a href="/">
                        <span>My Current Workspace</span>
                    </a>
                    <a href="/">
                        <span>Best Place To Travel This Summer</span>
                    </a>
                    <a href="/">
                        <span>Latest UI Trends To Inspired From</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailSidebar;
