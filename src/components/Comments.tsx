// import React from "react";
// import "../components/css/comments.css";
// import { useSelector } from "react-redux";

// export interface CommentProps {
//     id: string;
//     replies: [];
//     author_name: string;
//     created_date: string;
//     comment_text: string;
//     imageSource: string;
//     updated_at: string;
//     post: string;
// }

// export interface ReplyProps {
//     id: string;
//     created_at: string;
//     updated_at: string;
//     reply_text: string;
//     comment_id: string;
//     author_id: string;
// }

// const filterReplies = (replies: ReplyProps[], parentCommentId: string) => {
//     return replies.filter((reply) => reply.parentCommentId === parentCommentId);
// };

// const Comment: React.FC<{
//     comment: CommentProps;
//     replies: ReplyProps[];
// }> = ({ comment, replies }) => {
//     const filteredReplies = filterReplies(replies, comment.id);
//     return (
//         <div className="comments-wrapper">
//             <div key={comment.id} className="comment-div">
//                 <div className="author-image">
//                     <img
//                         src={comment.imageSource}
//                         alt="qandeel's profile img"
//                     />
//                 </div>
//                 <div className="comment-area">
//                     <div className="author-name">
//                         <h3>{comment.author_name}</h3>
//                         <div className="reply">
//                             <h5>Reply</h5>
//                             <i className="fa-solid fa-reply"></i>
//                         </div>
//                     </div>
//                     <div className="comment-date">
//                         <h6>{comment.created_date}</h6>
//                     </div>
//                     <div className="comment-para">{comment.comment_text}</div>
//                 </div>
//             </div>
//             {filteredReplies.map((reply, index) => (
//                 <div key={reply.id} className="replies-div comment-reply">
//                     <div className="author-image">
//                         <img
//                             src={reply.imageSource}
//                             alt="qandeel haider khan comment"
//                         />
//                     </div>
//                     <div className="comment-area">
//                         <div className="author-name">
//                             <h3>{reply.author}</h3>
//                             <div className="reply">
//                                 <h5>Reply</h5>
//                                 <i className="fa-solid fa-reply"></i>
//                             </div>
//                         </div>
//                         <div className="comment-date">
//                             <h6>{reply.replyDate}</h6>
//                         </div>
//                         <div className="comment-para">{reply.replyText}</div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// const Comments: React.FC<{
//     comments: CommentProps[];
//     replies: ReplyProps[];
// }> = ({ comments, replies }) => {
//     return (
//         <>
//             {comments.map((comment, index) => (
//                 <Comment comment={comment} replies={replies} key={comment.id} />
//             ))}
//         </>
//     );
// };
// export default Comments;
import React from "react";

const Comments = () => {
    return <div>Comments</div>;
};

export default Comments;
