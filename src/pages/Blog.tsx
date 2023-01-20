import { Link } from "react-router-dom";
import AboutUserIcon from "../components/icons/AboutUser";
import ResumeHeader from "../components/ResumeHeader";
import { motion } from "framer-motion";
import "./blog.css";
import BookIcon from "../components/icons/BookIcon";

const Blog = () => {
    return (
        <motion.div
            initial={{ translateX: "100%" }}
            animate={{ opacity: 1, translateX: "0%" }}
            exit={{ opacity: "100%" }}
            transition={{ duration: 1 }}
        >
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
        </motion.div>
    );
};

export default Blog;
