import React, { useState } from "react";
import BlogDetailSidebar from "../components/BlogDetailSidebar";
import { commentsData, repliesData } from "../components/comments";
import CommentsForm from "../components/CommentsForm";
import "./blog-detail.css";

import PostTags from "../components/PostTags";
import Comments, { CommentProps, ReplyProps } from "../components/Comments";
import PrevBtn from "../components/PrevBtn";

const BlogDetail = () => {
    interface FormData {
        name: string;
        email: string;
        comment: string;
        checkbox: boolean;
    }

    const [isReplyOpen, setIsReplyOpen] = useState(false);
    const handleSubmit = (data: FormData) => {
        console.log(data);
        // handle the form data here
    };
    const comments: CommentProps[] = commentsData;
    const replies: ReplyProps[] = repliesData;
    return (
        <>
            <div className="post-page-main">
                <div className="post-page-wrapper">
                    <div className="post-image">
                        <img
                            className="detail-image"
                            src="images/blog/blog-1.jpg"
                            alt="blog-img"
                        />
                    </div>
                    <div className="post-wrapper">
                        <div className="post-container">
                            <div className="post-content">
                                <div className="post-headings">
                                    <div className="categories">
                                        <a className="category-name" href="#">
                                            Web Design
                                        </a>
                                    </div>
                                    <h1 className="post-title">
                                        Best Way To Design
                                    </h1>
                                    <span className="post-date">
                                        May 10, 2021
                                    </span>
                                </div>
                                <div className="text-content">
                                    {/* post full content */}
                                    <div className="post-full-content">
                                        <p className="post-paragraph">
                                            <strong>Lorem Ipsum</strong>&nbsp;is
                                            simply dummy text of the printing is
                                            simply dummy text of the printing
                                            and typesetting industry. Lorem
                                            Ipsum has been the industry's
                                            standard dummy text ever since the
                                            1500s, when an unknown printer took
                                            a galley of type and scrambled it to
                                            make a type specimen book. It has
                                            survived not only five centuries,
                                            but also the leap into electronic
                                            typesetting, remaining essentially
                                            unchanged. It was popularised in the
                                            1960s with the release of Letraset
                                            sheets containing Lorem Ipsum
                                            passages, and more recently with
                                            desktop publishing software like
                                            Aldus PageMaker including versions
                                            of Lorem Ipsum.
                                        </p>
                                        <h4 className="paragraph-heading">
                                            First, solve the problem. Then write
                                            the code.
                                        </h4>
                                        <p></p>
                                        <blockquote className="block-quote">
                                            <p>
                                                <strong>
                                                    In some ways, programming is
                                                </strong>
                                            </p>
                                            <cite className="quote-writer">
                                                <em>Andrew Hunt</em>
                                            </cite>
                                        </blockquote>
                                        <p>
                                            The standard chunk of Lorem Ipsum
                                            make a type specimen book. It has
                                            survived not only five centuries,
                                            but also the leap into electronic
                                            typesetting, remaining essentially
                                            unchanged. It was popularised in the
                                            1960s with the release of Letraset
                                            sheets containing Lorem Ipsum
                                            passages, and more recently with
                                            desktop publishing software like
                                            Aldus PageMaker including versions
                                            of Lorem Ipsum.
                                        </p>
                                        <div className="content-images-wrapper">
                                            <figure className="content-image-container">
                                                <img
                                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img1.jpg"
                                                    alt=""
                                                    className="content-image"
                                                />
                                            </figure>
                                            <figure className="content-image-container">
                                                <img
                                                    loading="lazy"
                                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img2.jpg"
                                                    alt=""
                                                    className="content-image"
                                                />
                                            </figure>
                                            <figure className="content-image-container">
                                                <img
                                                    loading="lazy"
                                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img3.jpg"
                                                    alt=""
                                                    className="content-image"
                                                />
                                            </figure>
                                        </div>
                                        <p>
                                            Contrary to popular belief, Lorem
                                            1960s with the release of Letraset
                                            sheets containing Lorem Ipsum
                                            passages, and more recently with
                                            desktop publishing software like
                                            Aldus PageMaker including versions
                                            of Lorem Ipsum.
                                        </p>
                                    </div>
                                    <PostTags />
                                    <PrevBtn />
                                    {/* comments section */}
                                    <div className="comments-section">
                                        <div className="5-comments">
                                            <h2>5 Comments</h2>
                                        </div>

                                        <Comments
                                            comments={comments}
                                            replies={replies}
                                        />

                                        <CommentsForm
                                            onSubmit={handleSubmit}
                                            initialName=""
                                            initialEmail=""
                                            initialComment=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog detail sidebar */}
                <BlogDetailSidebar />
            </div>
        </>
    );
};

export default BlogDetail;
