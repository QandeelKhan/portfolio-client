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

//

export const commentsData = [
    {
        id: "1",
        authorName: "John-Doe",
        commentDate: "May 12, 2021 at 7:39 am",
        commentText:
            "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
        imageSource: "../images/other/profile-img.jpg",
    },
    {
        id: "2",
        authorName: "Jane-Doe",
        commentDate: "May 12, 2021 at 8:39 am",
        commentText:
            "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
        imageSource: "../images/other/profile-img.jpg",
    },
];

export const repliesData = [
    {
        id: "6",
        parentCommentId: "1",
        authorName: "John-Doe",
        replyDate: "May 12, 2021 at 9:39 am",
        replyText:
            "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
        imageSource: "../images/other/profile-img.jpg",
    },
    {
        id: "7",
        parentCommentId: "1",
        authorName: "Jane-Doe",
        replyDate: "May 12, 2021 at 10:39 am",
        replyText:
            "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
        imageSource: "../images/other/profile-img.jpg",
    },
    {
        id: "7",
        parentCommentId: "2",
        authorName: "Jane-Doe",
        replyDate: "May 12, 2021 at 10:39 am",
        replyText:
            "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
        imageSource: "../images/other/profile-img.jpg",
    },
];

// export const data = {
//     comments: [
//         {
//             authorName: "John-Doe",
//             commentDate: "May 12, 2021 at 7:39 am",
//             commentText:
//                 "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
//             imageSource: "../images/other/profile-img.jpg",
//         },
//         {
//             authorName: "Jane-Doe",
//             commentDate: "May 12, 2021 at 8:39 am",
//             commentText:
//                 "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
//             imageSource: "../images/other/profile-img.jpg",
//         },
//     ],
//     replies: [
//         {
//             authorName: "John-Doe",
//             replyDate: "May 12, 2021 at 9:39 am",
//             replyText:
//                 "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
//             imageSource: "../images/other/profile-img.jpg",
//         },
//         {
//             authorName: "Jane-Doe",
//             replyDate: "May 12, 2021 at 10:39 am",
//             replyText:
//                 "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
//             imageSource: "../images/other/profile-img.jpg",
//         },
//     ],
// };
