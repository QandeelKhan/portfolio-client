import React from "react";
import AboutUserIcon from "../components/icons/AboutUser";
import ResumeHeader from "../components/ResumeHeader";

const Blog = () => {
    return (
        <>
            <ResumeHeader iconComponent={<AboutUserIcon />} pageName="Blog.">
                <h1 className="under-construction">
                    “We’re working hard to make this page available for you on
                    20th friday 2023. You will then find the blog page up and
                    running! Until then we look forward to seeing you on our
                    social media or you can directly send an email us.”
                </h1>
            </ResumeHeader>
        </>
    );
};

export default Blog;
