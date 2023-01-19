import { Link } from "react-router-dom";
import AboutUserIcon from "../components/icons/AboutUser";
import ResumeHeader from "../components/ResumeHeader";
import "./blog.css";

const Blog = () => {
    return (
        <>
            <ResumeHeader iconComponent={<AboutUserIcon />} pageName="Blog.">
                <div className="blog-grid">
                    <Link to="/blog-detail" className="blog-grid-item">
                        <div className="blog-item-wrapper">
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
                        </div>
                    </Link>
                    <Link to="/blog-detail" className="blog-grid-item">
                        <div className="blog-item-wrapper">
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
                        </div>
                    </Link>
                    <Link to="/blog-detail" className="blog-grid-item">
                        <div className="blog-item-wrapper">
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
                        </div>
                    </Link>
                    <Link to="/blog-detail" className="blog-grid-item">
                        <div className="blog-item-wrapper">
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
                        </div>
                    </Link>
                    <Link to="/blog-detail" className="blog-grid-item">
                        <div className="blog-item-wrapper">
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
                        </div>
                    </Link>
                    <Link to="/blog-detail" className="blog-grid-item">
                        <div className="blog-item-wrapper">
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
                        </div>
                    </Link>
                </div>
            </ResumeHeader>
        </>
    );
};

export default Blog;
