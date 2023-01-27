import React, { useEffect, useState } from "react";
import "./blog-detail-side-nav.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BlogDetailSidebar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
        setSidebarVisible(!sidebarVisible);
    };

    const { blogCardClicked } = useSelector((state: RootState) => state.events);

    return (
        <>
            {blogCardClicked ? (
                <div
                    className={`wrapper ${
                        sidebarVisible ? "sidebar-visible" : "sidebar-hidden"
                    }`}
                >
                    <div
                        className={`arrow-div ${open ? "open-arrow" : ""}`}
                        onClick={handleClick}
                    >
                        <i
                            className={`fa-solid ${
                                !sidebarVisible
                                    ? "fa-arrow-left"
                                    : "fa-arrow-right"
                            }`}
                        ></i>
                    </div>
                    <div className="main-side-container">
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
                                    <span>
                                        Best Place To Travel This Summer
                                    </span>
                                </a>
                                <a href="/">
                                    <span>
                                        Latest UI Trends To Inspired From
                                    </span>
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
                                    <span>
                                        Best Place To Travel This Summer
                                    </span>
                                </a>
                                <a href="/">
                                    <span>
                                        Latest UI Trends To Inspired From
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default BlogDetailSidebar;
