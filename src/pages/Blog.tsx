import React from "react";
import AboutUserIcon from "../components/icons/AboutUser";
import ResumeHeader from "../components/ResumeHeader";

const Blog = () => {
    return (
        <>
            <ResumeHeader iconComponent={<AboutUserIcon />} pageName="Blog.">
                <h1 className="under-construction">
                    <span>UNDER </span>
                    <span className="construction">CONSTRUCTION...</span>
                </h1>
            </ResumeHeader>
        </>
    );
};

export default Blog;
