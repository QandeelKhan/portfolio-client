import React from "react";

const PostTags = () => {
    return (
        <>
            <div className="page-links"></div>
            <div className="post-meta">
                <div className="tag-links">
                    {" "}
                    <span className="icon">
                        <i className="fas fa-tag"></i>
                    </span>{" "}
                    <a
                        className="tag-link"
                        href="https://watson.cosmos-themes.com/dark/tag/design/"
                        rel="category tag"
                    >
                        <span>Design</span>
                    </a>
                    <a
                        className="tag-link"
                        href="https://watson.cosmos-themes.com/dark/tag/events/"
                        rel="category tag"
                    >
                        <span>Events</span>
                    </a>
                    <a
                        className="tag-link"
                        href="https://watson.cosmos-themes.com/dark/tag/process/"
                        rel="category tag"
                    >
                        <span>Process</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default PostTags;
