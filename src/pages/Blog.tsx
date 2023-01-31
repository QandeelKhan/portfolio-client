import { Link } from "react-router-dom";
import AboutUserIcon from "../components/icons/AboutUser";
import PageTemplate from "../components/PageTemplate";
import "./css/blog.css";
import "./css/blog-detail.css";
import { blogItems } from "../components/data/blogData";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../redux/dataSlice";
import { Helmet } from "react-helmet";

const Blog = () => {
    const dispatch = useDispatch();

    // const handlePostClick = (post: any) => {
    //     dispatch(setSelectedPost(post));
    // };

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
                    {blogItems.map((blogItem, index) => (
                        <Link
                            to="/blog-detail"
                            className="blog-grid-item"
                            key={index}
                            onClick={() => dispatch(setSelectedPost(blogItem))}
                        >
                            <div className="blog-item-wrapper">
                                <div className="blog-image-container">
                                    <img
                                        className="blog-image"
                                        src={blogItem.image}
                                        alt="blog-img"
                                    />
                                </div>
                                <div className="blog-content">
                                    <div className="categories">
                                        <span className="category-name">
                                            {blogItem.category}
                                        </span>
                                    </div>
                                    <h3 className="blog-item-title">
                                        {blogItem.title}
                                    </h3>
                                    <div className="blog-date">
                                        {blogItem.date}
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
