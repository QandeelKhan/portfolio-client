import React from "react";
import "./blog-detail.css";

const BlogDetail = () => {
    return (
        <div className="blog-detail-main">
            <div className="blog-details-container">
                <div className="blog-image-container">
                    <img
                        className="blog-image"
                        src="images/blog/blog-1.jpg"
                        alt="blog-img"
                    />
                </div>
                <div className="post-heading">
                    <div className="categories">
                        <a className="category-name" href="#">
                            Web Design
                        </a>
                    </div>
                    <h1 className="post-title">Best Way To Design</h1>
                    <span className="post-date">May 10, 2021</span>
                </div>
            </div>
            {/* <div className="blog-detail">
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
                            <span className="category-name">Web Design</span>
                        </div>
                        <h3 className="blog-item-title">Best Way to Design</h3>
                        <div className="blog-date">
                            May 10, 2021May 10, 2021
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default BlogDetail;
