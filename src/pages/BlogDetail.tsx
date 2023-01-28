import React, { useEffect, useState } from "react";
import repliesData from "../components/replies.json";
import commentsData from "../components/comments.json";
import CommentsForm from "../components/CommentsForm";
import "./blog-detail.css";

import PostTags from "../components/PostTags";
import Comments, { CommentProps, ReplyProps } from "../components/Comments";
import PrevBtn from "../components/PrevBtn";
import { useDispatch } from "react-redux";
import { setBlogCardClicked } from "../redux/eventsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

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

    const comments: CommentProps[] = commentsData;
    const replies: ReplyProps[] = repliesData;

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

    // component render logic
    return (
        <>
            <div className="post-page-main">
                <div className="post-page-wrapper">
                    <div className="post-image">
                        <img
                            className="detail-image"
                            src={selectedPost.image}
                            alt="blog-img"
                        />
                    </div>
                    <div className="post-wrapper">
                        <div className="post-container">
                            <div className="post-content">
                                <div className="post-headings">
                                    <div className="categories">
                                        <a className="category-name" href="#">
                                            {selectedPost.category}
                                        </a>
                                    </div>
                                    <h1 className="post-title">
                                        {selectedPost.title}
                                    </h1>
                                    <span className="post-date">
                                        {selectedPost.date}
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
                                            {selectedPost.initialParagraph}
                                        </p>
                                        <h4 className="paragraph-heading">
                                            {selectedPost.paragraphHeading}
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
                                                    {selectedPost.quoteWriter}
                                                </em>
                                            </cite>
                                        </blockquote>
                                        <p>{selectedPost.secondParagraph}</p>
                                        <div className="content-images-wrapper">
                                            {selectedPost.images.map(
                                                (image, index) => (
                                                    <figure
                                                        key={index}
                                                        className="content-image-container"
                                                    >
                                                        <img
                                                            src={image}
                                                            alt=""
                                                            className="content-image"
                                                        />
                                                    </figure>
                                                )
                                            )}
                                        </div>
                                        <p>
                                            {selectedPost.paragraphAfterImage}
                                        </p>
                                    </div>
                                    <PostTags />
                                    <PrevBtn />
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
