import React from "react";

interface CommentProps {
    authorName: string;
    commentDate: string;
    commentText: string;
    imageSource: string;
}

interface ReplyProps {
    authorName: string;
    replyDate: string;
    replyText: string;
    imageSource: string;
}

const Comments: React.FC<{
    comments: CommentProps[];
    replies: ReplyProps[];
}> = ({ comments, replies }) => {
    return (
        <>
            {comments.map((comment, index) => (
                <div key={index} className="comment-div">
                    <div className="author-image">
                        <img src={comment.imageSource} alt="profile-img" />
                    </div>
                    <div className="comment-area">
                        <div className="author-name">
                            <h3>{comment.authorName}</h3>
                        </div>
                        <div className="comment-date">
                            <h6>{comment.commentDate}</h6>
                        </div>
                        <div className="comment-para">
                            {comment.commentText}
                        </div>
                    </div>
                </div>
            ))}
            {replies.map((reply, index) => (
                <div key={index} className="comment-div comment-reply">
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
                        <div className="comment-para">{reply.replyText}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Comments;

{
    /* <div className="comment-div"> 
<div className="author-image">
    <img
        src="../images/other/profile-img.jpg"
        alt="profile-img"
    />
</div>
<div className="comment-area">
    <div className="author-name">
        <h3>John-Doe</h3>
        <div className="reply">
            <h5>Reply</h5>
            <i className="fa-solid fa-reply"></i>
        </div>
    </div>
    <div className="comment-date">
        <h6>May 12, 2021 at 7:39 am</h6>
    </div>
    <div className="comment-para">
        A component that allows for easy creation of menu items,
        quickly creating paragraphs of “Lorem Ipsum” and
        pictures with custom sizes.
    </div>
</div>
</div>
<div className="comment-div comment-reply">
<div className="author-image">
    <img
        src="../images/other/profile-img.jpg"
        alt="profile-img"
    />
</div>
<div className="comment-area">
    <div className="author-name">
        <h3>John-Doe</h3>
        <div className="reply">
            <h5>Reply</h5>
            <i className="fa-solid fa-reply"></i>
        </div>
    </div>
    <div className="comment-date">
        <h6>May 12, 2021 at 7:39 am</h6>
    </div>
    <div className="comment-para">
        A component that allows for easy creation of menu items,
        quickly creating paragraphs of “Lorem Ipsum” and
        pictures with custom sizes.
    </div>
</div>
</div> */
}
