import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutUserIcon from "../components/icons/AboutUser";
import PageTemplate from "../components/PageTemplate";
import "./css/blog.css";
import "./css/blog-detail.css";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../redux/dataSlice";
import { Helmet } from "react-helmet";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // fetch("https://our-resume-backend-azr8u.ondigitalocean.app/api/blog")
        fetch("http://127.0.0.1:8000/api/blog")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => setError(error));
    }, []);
    console.log(posts);

    return (
        <>
            <Helmet>
                <title>My Blog | Programming, Qandeel Khan, and More</title>
                <meta
                    name="description"
                    content="Stay updated with the latest programming knowledge, learn about the life of Qandeel Khan, and more with my blog."
                />
                <meta
                    name="keywords"
                    content="programming, react, django, qandeel khan, devops, redux, typescript, history, blog"
                />
            </Helmet>

            <PageTemplate iconComponent={<AboutUserIcon />} pageName="Blog.">
                <div className="blog-grid">
                    {posts.map((post: any) => (
                        <Link
                            to="/blog-detail"
                            className="blog-grid-item"
                            key={post.id}
                            onClick={() => dispatch(setSelectedPost(post))}
                        >
                            <div className="blog-item-wrapper">
                                <div className="blog-image-container">
                                    <img
                                        className="blog-image"
                                        src={post.cover_image}
                                        alt="blog-img"
                                    />
                                </div>
                                <div className="blog-content">
                                    <div className="categories">
                                        <span className="category-name">
                                            {post.category.category_name}
                                        </span>
                                    </div>
                                    <h3 className="blog-item-title">
                                        {post.title}
                                    </h3>
                                    <div className="blog-date">
                                        {post.created_at}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </PageTemplate>
        </>
    );
};

export default Blog;
