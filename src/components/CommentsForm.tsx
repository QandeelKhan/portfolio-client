import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../components/css/comments-form.css";
import { RootState } from "../redux/store";
import { useMutation } from "react-query";
import { usePostingCommentsMutation } from "../redux/services/userAuthApi";

interface commentProps {
    postId: string;
    commentText: string;
}

const CommentsForm: React.FC<commentProps> = ({ postId, commentText }) => {
    const [comment, setComment] = useState(commentText);
    const { mutate, isLoading, error } = usePostingCommentsMutation() as any;
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await mutate({
                comment: comment,
                postId: postId,
            });
            setComment("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="blog-detail-comment-div">
                <h3>Write a Comment</h3>
                <div className="comment-write">
                    <div className="input-group input-message">
                        <textarea
                            required
                            name="message"
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                        />
                        <label>Your Comment</label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="send-message-btn"
                    value="Send Message"
                >
                    POST COMMENT
                </button>
            </div>
        </form>
    );
};

export default CommentsForm;
