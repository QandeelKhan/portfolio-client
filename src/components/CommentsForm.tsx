import React, { useState } from "react";
import "../components/comment-form.css";

interface commentProps {
    onSubmit: (data: {
        name: string;
        email: string;
        comment: string;
        checkbox: boolean;
    }) => void;
    initialName: string;
    initialEmail: string;
    initialComment: string;
}

const CommentsForm: React.FC<commentProps> = ({
    onSubmit,
    initialName,
    initialEmail,
    initialComment,
}) => {
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [comment, setComment] = useState(initialComment);
    const [checkbox, setCheckbox] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, email, comment, checkbox });
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
        // <div className="blog-detail-comment-div">
        //     <h3>Write a Comment</h3>
        //     <div className="comment-write">
        //         <div className="name-and-email">
        //             <div className="input-group ">
        //                 <input
        //                     type="text"
        //                     name="user_name"
        //                     className="form-input"
        //                     required
        //                 />
        //                 <label>Name</label>
        //             </div>
        //             <div className="input-group">
        //                 <input
        //                     type="email"
        //                     name="user_email"
        //                     className="form-input"
        //                     required
        //                 />
        //                 <label>Email</label>
        //             </div>
        //         </div>
        //         <div className="input-group input-message">
        //             <textarea required name="message" />
        //             <label>Your Comment</label>
        //         </div>
        //     </div>
        //     <div className="checkbox">
        //         <input
        //             type="checkbox"
        //             // name="user_email"
        //             className="checkbox"
        //             // required
        //         />
        //         <label>
        //             Save my name, email, and website in this browser for the
        //             next time I comment.
        //         </label>
        //     </div>
        //     <button
        //         type="submit"
        //         className="send-messsage-btn"
        //         value="Send Message"
        //     >
        //         POST COMMENT
        //     </button>
        // </div>
    );
};

export default CommentsForm;
