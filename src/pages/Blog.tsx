import React from "react";
import { Link } from "react-router-dom";
import AboutUserIcon from "../components/icons/AboutUser";
import ResumeHeader from "../components/ResumeHeader";
import "./blog.css";

const Blog = () => {
    return (
        <>
            <ResumeHeader iconComponent={<AboutUserIcon />} pageName="Blog.">
                <div className="blog-grid">
                    <Link className="blog-grid-item" to="/blog-detail">
                        <a href="#" className="blog-item-wrapper">
                            <div className="blog-image-container">
                                <img
                                    className="blog-image"
                                    src="images/blog/detail-img-1.jpg"
                                    alt="blog-img"
                                />
                            </div>
                            <div className="blog-content">
                                <div className="categories">
                                    <span className="category-name">
                                        Web Design
                                    </span>
                                </div>
                                <h3 className="blog-item-title">
                                    Best Way to Design
                                </h3>
                                <div className="blog-date">
                                    May 10, 2021May 10, 2021
                                </div>
                            </div>
                        </a>
                    </Link>
                    <div className="blog-grid-item">
                        <a href="#" className="blog-item-wrapper">
                            <div className="blog-image-container">
                                <img
                                    className="blog-image"
                                    src="images/blog/blog-1.jpg"
                                    alt="blog-img"
                                />
                            </div>
                            <div className="blog-content">
                                <div className="categories">
                                    <span className="category-name">
                                        Web Design
                                    </span>
                                </div>
                                <h3 className="blog-item-title">
                                    Best Way to Design
                                </h3>
                                <div className="blog-date">
                                    May 10, 2021May 10, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="blog-grid-item">
                        <a href="#" className="blog-item-wrapper">
                            <div className="blog-image-container">
                                <img
                                    className="blog-image"
                                    src="images/blog/blog-1.jpg"
                                    alt="blog-img"
                                />
                            </div>
                            <div className="blog-content">
                                <div className="categories">
                                    <span className="category-name">
                                        Web Design
                                    </span>
                                </div>
                                <h3 className="blog-item-title">
                                    Best Way to Design
                                </h3>
                                <div className="blog-date">
                                    May 10, 2021May 10, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="blog-grid-item">
                        <a href="#" className="blog-item-wrapper">
                            <div className="blog-image-container">
                                <img
                                    className="blog-image"
                                    src="images/blog/blog-1.jpg"
                                    alt="blog-img"
                                />
                            </div>
                            <div className="blog-content">
                                <div className="categories">
                                    <span className="category-name">
                                        Web Design
                                    </span>
                                </div>
                                <h3 className="blog-item-title">
                                    Best Way to Design
                                </h3>
                                <div className="blog-date">
                                    May 10, 2021May 10, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="blog-grid-item">
                        <a href="#" className="blog-item-wrapper">
                            <div className="blog-image-container">
                                <img
                                    className="blog-image"
                                    src="images/blog/blog-1.jpg"
                                    alt="blog-img"
                                />
                            </div>
                            <div className="blog-content">
                                <div className="categories">
                                    <span className="category-name">
                                        Web Design
                                    </span>
                                </div>
                                <h3 className="blog-item-title">
                                    Best Way to Design
                                </h3>
                                <div className="blog-date">
                                    May 10, 2021May 10, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="blog-grid-item">
                        <a href="#" className="blog-item-wrapper">
                            <div className="blog-image-container">
                                <img
                                    className="blog-image"
                                    src="images/blog/blog-1.jpg"
                                    alt="blog-img"
                                />
                            </div>
                            <div className="blog-content">
                                <div className="categories">
                                    <span className="category-name">
                                        Web Design
                                    </span>
                                </div>
                                <h3 className="blog-item-title">
                                    Best Way to Design
                                </h3>
                                <div className="blog-date">
                                    May 10, 2021May 10, 2021
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </ResumeHeader>
        </>
    );
};

export default Blog;
