import { Link } from "react-router-dom";
import AboutUserIcon from "../components/icons/AboutUser";
import PageTemplate from "../components/PageTemplate";
import "./blog.css";
import "./blog-detail.css";
import { blogItems } from "../components/blogData";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../redux/dataSlice";

const Blog = () => {
    const dispatch = useDispatch();

    // const handlePostClick = (post: any) => {
    //     dispatch(setSelectedPost(post));
    // };

    return (
        <PageTemplate iconComponent={<AboutUserIcon />} pageName="Blog.">
            <div className="blog-grid">
                {blogItems.map((blogItem, index) => (
                    <Link
                        to="/blog-detail"
                        className="blog-grid-item"
                        key={index}
                        onClick={() => dispatch(setSelectedPost(blogItem))}
                    >
                        {/* {posts.map((post) => (
                            <div
                                key={post.title}
                                onClick={() => handlePostClick(post)}
                            >
                                {post.title}
                            </div>
                        ))} */}
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
                                <div className="blog-date">{blogItem.date}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </PageTemplate>
    );
};

export default Blog;
