import React, { useEffect, useState } from "react";
import "./css/blog-detail-side-bar.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setSideBarVisible } from "../redux/eventsSlice";

const BlogDetailSidebar = () => {
    // const [sidebarVisible, setSidebarVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const { blogCardClicked, sideBarVisible } = useSelector(
        (state: RootState) => state.events
    );

    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(!open);
        dispatch(setSideBarVisible(!sideBarVisible));
    };

    return (
        <>
            {blogCardClicked ? (
                <div
                    className={`wrapper ${
                        sideBarVisible ? "sidebar-visible" : "sidebar-hidden"
                    }`}
                >
                    <div
                        className={`arrow-div ${open ? "open-arrow" : ""}`}
                        onClick={handleClick}
                    >
                        <i
                            className={`fa-solid ${
                                !sideBarVisible
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
