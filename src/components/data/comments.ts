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
            "Great post! It's clear that you've put a lot of thought into the different aspects of full-stack development and how they relate to website design. I especially appreciate the attention you've paid to the user experience and how to make sure that it's seamless and intuitive for the end user. Keep up the good work!",
        imageSource: "../images/other/profile-img.jpg",
    },
    {
        id: "2",
        authorName: "Jane-Doe",
        commentDate: "May 12, 2021 at 8:39 am",
        commentText:
            "Great post! I found it very informative and helpful. It's clear that you have a lot of experience in full-stack development and website design. I would like to know how you approach responsive design while building a website.",
        imageSource: "../images/other/profile-img.jpg",
    },
];

export const repliesData = [
    {
        id: "6",
        parentCommentId: "1",
        authorName: "Muhammad",
        replyDate: "May 12, 2021 at 9:39 am",
        replyText:
            "Thanks for the kind words! I always try to keep the user experience top of mind when I'm designing and building websites. I believe that it's what ultimately sets a good website apart from a great one.",
        imageSource: "../images/testimonial/muhammad-dp.jpg",
    },
    {
        id: "7",
        parentCommentId: "1",
        authorName: "Usama",
        replyDate: "May 12, 2021 at 10:39 am",
        replyText:
            "I couldn't agree more. I think that's the beauty of full-stack development, it allows you to have a holistic approach to website design. You can focus on the user experience and performance at the same time. And by keeping the website design simple and easy to navigate, it makes it easy for the users to find what they are looking for.",
        imageSource: "../images/testimonial/usama-dp.jpeg",
    },
    {
        id: "7",
        parentCommentId: "2",
        authorName: "Saad",
        replyDate: "May 12, 2021 at 10:39 am",
        replyText:
            "Thanks for reading and your kind words! I'm glad you found it informative. When it comes to responsive design, my approach is to first design for mobile devices and then progressively enhance the design for larger screens. This way, the site will look great on any device and will provide a seamless experience for the users. I also use CSS media queries to adjust the layout and typography according to the screen size. Additionally, I test the website on different devices during the development process to ensure that it looks and works well on all of them.",
        imageSource: "../images/testimonial/sadi-dp.jpeg",
    },
];

export const data = {
    commentsData: [
        {
            authorName: "John-Doe",
            commentDate: "May 12, 2021 at 7:39 am",
            commentText:
                "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
            imageSource: "../images/other/profile-img.jpg",
        },
        {
            authorName: "Jane-Doe",
            commentDate: "May 12, 2021 at 8:39 am",
            commentText:
                "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
            imageSource: "../images/other/profile-img.jpg",
        },
    ],
    repliesData: [
        {
            authorName: "John-Doe",
            replyDate: "May 12, 2021 at 9:39 am",
            replyText:
                "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
            imageSource: "../images/other/profile-img.jpg",
        },
        {
            authorName: "Jane-Doe",
            replyDate: "May 12, 2021 at 10:39 am",
            replyText:
                "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes",
            imageSource: "../images/other/profile-img.jpg",
        },
    ],
};
