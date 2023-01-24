import React, { useState } from "react";
import "../components/comment-form.css";
// import fs from "fs";
// fs:fs (file system) module in Node.js. This module provides an API for interacting with the file system, including reading and writing files.
interface commentProps {
    onSubmit: (data: {
        name: string;
        email: string;
        comment: string;
        checkbox: boolean;
        id: string;
    }) => void;
    initialName: string;
    initialEmail: string;
    initialComment: string;
    initialId: string;
}

const CommentsForm: React.FC<commentProps> = ({
    onSubmit,
    initialName,
    initialEmail,
    initialComment,
    initialId,
}) => {
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [comment, setComment] = useState(initialComment);
    const [checkbox, setCheckbox] = useState(false);
    const [id, setId] = useState(initialId);
    // handleSubmit for server based data
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     onSubmit({ name, email, comment, checkbox, id });
    // };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const commentData = { name, email, comment, checkbox, id };
        // fs.appendFileSync("comments.json", JSON.stringify(commentData) + "\n");
        // onSubmit(commentData);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Name</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="user_email"
                                className="form-input"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="input-group input-message">
                        <textarea
                            required
                            name="message"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <label>Your Comment</label>
                    </div>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={checkbox}
                        onChange={() => setCheckbox(!checkbox)}
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
        </form>
    );
};

export default CommentsForm;
