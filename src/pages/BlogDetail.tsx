import React, { useEffect, useState } from "react";
import CommentsForm from "../components/CommentsForm";
import "./css/blog-detail.css";
import "../components/css/comments.css";

import PostTags from "../components/PostTags";
// import Comments, { CommentProps, ReplyProps } from "../components/Comments";
import PrevBtn from "../components/PrevBtn";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Helmet } from "react-helmet";
import { setBlogCardClicked } from "../redux/reducers/eventsSlice";

const BlogDetail = () => {
    interface FormData {
        id: string;
        name: string;
        email: string;
        comment: string;
        checkbox: boolean;
    }

    const handleSubmit = (data: FormData) => {
        const newComment = {
            id: Date.now().toString(),
            name: data.name,
            email: data.email,
            comment: data.comment,
            checkbox: data.checkbox,
        };
    };

    const [isReplyOpen, setIsReplyOpen] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBlogCardClicked(true));
        // cleanup function, componentDidUnmount
        return () => {
            dispatch(setBlogCardClicked(false));
        };
    }, []);

    const selectedPost = useSelector(
        (state: RootState) => state.data.selectedPost
    );

    if (!selectedPost) {
        return <div>No post selected</div>;
    }
    // const comments: CommentProps[] = selectedPost.comments;
    // const replies: ReplyProps[] = selectedPost.repliesData;

    // const filteredComments = comments.filter(
    //     (comment) => Object.keys(comment).length !== 0
    // );

    // component render logic
    return (
        <>
            <Helmet>
                <title>{selectedPost.title} - Qandeel Khan's Blog</title>
                <meta
                    name="description"
                    // content={selectedPost.initialParagraph}
                />
                {/* <meta name="keywords" content={selectedPost.kewords} /> */}
                <meta
                    name="keywords"
                    content="Python, Django and React, django and react Full-stack developer, qandeel khan, qandeel haider khan"
                />
            </Helmet>
            <div className="post-page-main">
                <div className="post-page-wrapper">
                    <div className="post-image">
                        <img
                            className="detail-image"
                            src={selectedPost.cover_image}
                            alt="blog-img"
                        />
                    </div>
                    <div className="post-wrapper">
                        <div className="post-container">
                            <div className="post-content">
                                <div className="post-headings">
                                    <div className="categories">
                                        <a className="category-name" href="#">
                                            {/* {selectedPost.category} */}
                                        </a>
                                    </div>
                                    <h1 className="post-title">
                                        {selectedPost.title}
                                    </h1>
                                    <span className="post-date">
                                        {selectedPost.created_at}
                                    </span>
                                </div>
                                <div className="text-content">
                                    {/* post full content */}
                                    <div className="post-full-content">
                                        <p className="post-paragraph">
                                            <strong>
                                                {selectedPost.title}
                                            </strong>
                                            &nbsp;
                                            {selectedPost.initial_paragraph}
                                        </p>
                                        <h4 className="paragraph-heading">
                                            {selectedPost.paragraph_heading}
                                        </h4>
                                        <p></p>
                                        <blockquote className="block-quote">
                                            <p>
                                                <strong>
                                                    {selectedPost.quote}
                                                </strong>
                                            </p>
                                            <cite className="quote-writer">
                                                <em>
                                                    {selectedPost.quote_writer}
                                                </em>
                                            </cite>
                                        </blockquote>
                                        <p>{selectedPost.second_paragraph}</p>
                                        <div className="content-images-wrapper">
                                            {selectedPost.post_images.map(
                                                (
                                                    postImages: any,
                                                    index: any
                                                ) => (
                                                    <figure
                                                        key={index}
                                                        className="content-image-container"
                                                    >
                                                        <img
                                                            src={
                                                                postImages.images
                                                            }
                                                            alt=""
                                                            className="content-image"
                                                        />
                                                    </figure>
                                                )
                                            )}
                                        </div>
                                        <p>
                                            {selectedPost.paragraph_after_image}
                                        </p>
                                    </div>
                                    <PostTags />
                                    <PrevBtn />
                                    {/* ---COMMENTS & REPLIES START */}
                                    <div className="comments-section">
                                        <div className="5-comments">
                                            <h2>
                                                {selectedPost.comments
                                                    .comment_count === 1
                                                    ? ""
                                                    : selectedPost.comment_count}{" "}
                                                Comments
                                            </h2>
                                        </div>
                                        {selectedPost.comments.comment_count ===
                                        0 ? (
                                            <h4>No comments yet</h4>
                                        ) : (
                                            <>
                                                {selectedPost.comments.map(
                                                    (comment: any) => (
                                                        <div className="comments-wrapper">
                                                            <div
                                                                key={comment.id}
                                                                className="comment-div"
                                                            >
                                                                <div className="author-image">
                                                                    <img
                                                                        src="images/other/profile-img.jpg"
                                                                        alt="qandeel's profile img"
                                                                    />
                                                                </div>
                                                                <div className="comment-area">
                                                                    <div className="author-name">
                                                                        <h3>
                                                                            {
                                                                                comment
                                                                                    .author
                                                                                    .first_name
                                                                            }
                                                                        </h3>
                                                                        <div className="reply">
                                                                            <h5>
                                                                                Reply
                                                                            </h5>
                                                                            <i className="fa-solid fa-reply"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comment-date">
                                                                        <h6>
                                                                            {
                                                                                comment.created_at
                                                                            }
                                                                        </h6>
                                                                    </div>
                                                                    <div className="comment-para">
                                                                        {
                                                                            comment.comment_text
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {comment.replies.map(
                                                                (
                                                                    reply: any
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            reply.id
                                                                        }
                                                                        className="replies-div comment-reply"
                                                                    >
                                                                        <div className="author-image">
                                                                            <img
                                                                                src="images/other/profile-img.jpg"
                                                                                alt="qandeel haider khan comment"
                                                                            />
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <div className="author-name">
                                                                                <h3>
                                                                                    {
                                                                                        reply
                                                                                            .author
                                                                                            .first_name
                                                                                    }
                                                                                </h3>
                                                                                <div className="reply">
                                                                                    <h5>
                                                                                        Reply
                                                                                    </h5>
                                                                                    <i className="fa-solid fa-reply"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div className="comment-date">
                                                                                <h6>
                                                                                    {
                                                                                        reply
                                                                                            .author
                                                                                            .date_created
                                                                                    }
                                                                                </h6>
                                                                            </div>
                                                                            <div className="comment-para">
                                                                                {
                                                                                    reply.reply_text
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    )
                                                )}
                                            </>
                                        )}

                                        {/* ---COMMENTS & REPLIES END */}
                                        <CommentsForm
                                            onSubmit={handleSubmit}
                                            initialName=""
                                            initialEmail=""
                                            initialComment=""
                                            initialId=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
