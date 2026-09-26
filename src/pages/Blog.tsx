import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookResume from "../components/icons/ResumeModeIcons/BookResume";
import PageTemplate from "../components/PageTemplate";
import "./css/blog.css";
import "./css/blog-detail.css";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../redux/dataSlice";
import { Helmet } from "react-helmet";
import { blogItems } from "../components/data/blogData";

const Blog = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        // Transform static blogItems to match API structure
        const transformedBlogItems = blogItems.map((item, index) => {
            // Filter out empty comment objects
            const validComments = item.commentsData?.filter((c: any) => Object.keys(c).length > 0) || [];
            
            return {
                id: index + 1,
                title: item.title,
                cover_image: item.image,
                category: {
                    category_name: item.category
                },
                created_at: item.date,
                // Additional fields for BlogDetail component
                initial_paragraph: item.initialParagraph || "",
                paragraph_heading: item.paragraphHeading || "",
                quote: item.quote || "",
                quote_writer: item.quoteWriter || "",
                second_paragraph: item.secondParagraph || "",
                post_images: item.images?.map((img: string) => ({ images: img })) || [],
                paragraph_after_image: item.paragraphAfterImage || "",
                // Transform comments to match API structure
                comments: validComments.map((comment: any) => ({
                    id: comment.id,
                    author_full_name: comment.authorName,
                    created_at: comment.commentDate,
                    comment_text: comment.commentText,
                    replies: item.repliesData?.filter((reply: any) => 
                        reply.parentCommentId === comment.id
                    ).map((reply: any) => ({
                        id: reply.id,
                        author_full_name: reply.authorName,
                        reply_text: reply.replyText,
                        author: {
                            date_created: reply.replyDate
                        }
                    })) || []
                })),
                comment_count: validComments.length
            };
        });

        // Set static data immediately
        setPosts(transformedBlogItems);

        // Try to fetch from API (keeps API logic intact)
        fetch("http://127.0.0.1:8000/api/blog")
            .then((response) => response.json())
            .then((data) => {
                // Only update if API returns data
                if (data && data.length > 0) {
                    setPosts(data);
                }
            })
            .catch((error) => {
                // Keep static data on API error
                console.log("Using static blog data (API unavailable):", error);
                setError(error);
            });
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

            <PageTemplate iconComponent={<BookResume />} pageName="Blog.">
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
