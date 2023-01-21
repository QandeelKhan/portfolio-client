import React from "react";

const CommentsSection = () => {
    return (
        <div className="blog-detail-comment-div">
            <h3>Write a Comment</h3>
            <div className="comment-write">
                <div className="name-and-email">
                    <div className="input-group ">
                        <input
                            type="text"
                            name="user_name"
                            className="form-input"
                            required
                        />
                        <label>Name</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="user_email"
                            className="form-input"
                            required
                        />
                        <label>Email</label>
                    </div>
                </div>
                <div className="input-group input-message">
                    <textarea required name="message" />
                    <label>Your Comment</label>
                </div>
            </div>
            <div className="checkbox">
                <input
                    type="checkbox"
                    // name="user_email"
                    className="checkbox"
                    // required
                />
                <label>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                </label>
            </div>
            <button
                type="submit"
                className="send-messsage-btn"
                value="Send Message"
            >
                POST COMMENT
            </button>
        </div>
    );
};

export default CommentsSection;
