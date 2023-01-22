import React from "react";
import "../components/comment.css";

export interface CommentProps {
    id: string;
    authorName: string;
    commentDate: string;
    commentText: string;
    imageSource: string;
}

export interface ReplyProps {
    id: string;
    parentCommentId: string;
    authorName: string;
    replyDate: string;
    replyText: string;
    imageSource: string;
}

const filterReplies = (replies: ReplyProps[], parentCommentId: string) => {
    return replies.filter((reply) => reply.parentCommentId === parentCommentId);
};

const Comment: React.FC<{
    comment: CommentProps;
    replies: ReplyProps[];
}> = ({ comment, replies }) => {
    const filteredReplies = filterReplies(replies, comment.id);
    return (
        <div key={comment.id} className="comment-div">
            <div className="author-image">
                <img src={comment.imageSource} alt="profile-img" />
            </div>
            <div className="comment-area">
                <div className="author-name">
                    <h3>{comment.authorName}</h3>
                    <div className="reply">
                        <h5>Reply</h5>
                        <i className="fa-solid fa-reply"></i>
                    </div>
                </div>
                <div className="comment-date">
                    <h6>{comment.commentDate}</h6>
                </div>
                <div className="comment-para">{comment.commentText}</div>
                {filteredReplies.map((reply, index) => (
                    <div key={reply.id} className="comment-div comment-reply">
                        <div className="author-image">
                            <img src={reply.imageSource} alt="profile-img" />
                        </div>
                        <div className="comment-area">
                            <div className="author-name">
                                <h3>{reply.authorName}</h3>
                                <div className="reply">
                                    <h5>Reply</h5>
                                    <i className="fa-solid fa-reply"></i>
                                </div>
                            </div>
                            <div className="comment-date">
                                <h6>{reply.replyDate}</h6>
                            </div>
                            <div className="comment-para">
                                {reply.replyText}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Comments: React.FC<{
    comments: CommentProps[];
    replies: ReplyProps[];
}> = ({ comments, replies }) => {
    return (
        <>
            {comments.map((comment, index) => (
                <Comment comment={comment} replies={replies} key={comment.id} />
            ))}
        </>
    );
};
export default Comments;
