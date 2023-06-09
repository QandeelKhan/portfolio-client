export const blogItems = [
    {
        title: "Best Way to Design",
        image: "images/blog/detail-img-1.jpg",
        category: "Web Design",
        date: "May 10, 2021",
        initialParagraph: `When designing a website, it's important to keep in mind the user experience.
        This means considering things like navigation, layout, and overall aesthetic.
        A clean and intuitive design will make it easier for users to find what they're looking for and interact with your site.
        One way to improve the user experience is to conduct user research and testing.
        This can be done by creating wireframes or mockups of your design and getting feedback from a diverse group of users.`,
        paragraphHeading: `First, solve the problem. Then write
        the code.`,
        quote: "In some ways, programming is",
        quoteWriter: "Andrew Hunt",
        secondParagraph: `Another key aspect of website design is ensuring that it is responsive,
        meaning that it looks and functions well on a variety of devices, including desktops,
        laptops, tablets, and smartphones. With the rise of mobile internet usage,
        it's important that your site can be easily accessed and used on a variety of screens.`,
        images: [
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img1.jpg",
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img2.jpg",
        ],
        paragraphAfterImage: `Another important aspect to consider is the site's accessibility.
        This means making sure that it can be used by people with disabilities, such as those who use screen readers or have low vision.
        Ensuring that your site is accessible can help to improve the user experience for a wider range of people and can also help to improve your search engine rankings.
        In conclusion, designing a website is a process that involves considering the user experience,
        accessibility, and performance. By conducting user research, creating responsive design,
        and optimizing the site's code and performance, you can create a website that is both visually appealing and easy to use.`,
        commentsData: [
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
        ],
        repliesData: [
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
        ],
    },

    {
        title: "Things I need to get started",
        image: "images/blog/blog-2.jpg",
        category: "Personal",
        date: "July 21, 2021",
        initialParagraph: `as a Full Stack Development Journey with Python Django and JavaScript React.
        Are you ready to start your journey as a full stack developer? The path may seem daunting at first,
        but with the right tools and mindset, you can turn your dream into a reality.
        To get started, you'll need to have a solid understanding of both the front-end and back-end technologies involved.
        For the front-end, JavaScript and React are essential. React is a JavaScript library for building user interfaces,
        and it's widely used in the industry. For the back-end, Python and Django are the go-to choices.
        Django is a high-level Python web framework that makes it easy to build web applications.`,
        paragraphHeading: `First, solve the problem. Then write
        the code.`,
        quote: "The best way to predict your future is to create it.",
        quoteWriter: "Abraham Lincoln",
        secondParagraph: `To deepen your understanding and skills in these technologies,
        there are plenty of resources available online. Websites such as Codecademy, Coursera,
        and Udemy offer courses that cover everything from the basics to advanced topics. In addition,
        there are numerous tutorials and documentation available on the internet that can help you learn and understand the different concepts.`,
        images: [
            "images/blog/blog-2-img1.jpg",
            "images/blog/blog-2-img2.jpg",
            "images/blog/blog-2-img3.jpg",
        ],
        paragraphAfterImage: `As you delve deeper into full stack development, it's important to remember
        that practice makes perfect. Building projects and experimenting with different technologies will
        help you gain a better understanding and solidify your skills.`,
        commentsData: [{}],
        repliesData: [{}],
    },
    {
        title: "From Games to Code: My Journey as a Full Stack Developer",
        image: "images/blog/signature.png",
        category: "Personal",
        date: "May 12, 2021",
        initialParagraph: `is
        I was born in a small town where access to technology and computer science education was limited.
        Growing up, my only exposure to computers was through video games.
        I would spend hours playing the latest games and trying to beat my family's high scores.
        However, little did I know that this hobby would eventually lead me to a career in programming.
        When I was a child, my mother broke my first video game console,
        thinking it was a waste of time for my education. I remember crying over it,
        feeling lost and without a hobby. But my father eventually bought me another console,
        and my love for video games only grew stronger. It wasn't until I got my hands on my first personal computer that I realized the potential for creating something beyond just playing games.
        In high school, I decided to study computer science in college, but my initial grades were not promising.
        I spent more time tinkering with my computer than focusing on my studies. However,
        it was during this time that I discovered the CS50 lectures and realized that I could turn my passion for technology into a career.
        I started learning programming on my own, with the help of online resources like codingwithmosh.com, where I had the opportunity to learn from instructor Moshfegh Hamedani. I fell in love with the Python programming language and spent countless hours locked in my room, honing my skills and building projects. I eventually expanded my knowledge to frontend development with JavaScript, becoming a full stack developer.
        Today, I am an independent software developer and entrepreneur, using platforms like Upwork to earn a living and teach others.
        My parents, who once thought my hobby was a waste of time, now see the value in what I do and are incredibly proud of my achievements.`,
        paragraphHeading: `First, solve the problem. Then write
        the code.`,
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        quoteWriter: "-Albert Schweitzer",
        secondParagraph: `My journey as a full stack developer has been a winding road, filled with ups and downs. But the one thing that has remained constant is my passion for technology and the desire to create something meaningful. I am grateful for the experiences and opportunities that led me to where I am today and I am excited to see where this path will take me in the future.`,
        images: [
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img1.jpg",
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img2.jpg",
            // "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img3.jpg",
        ],
        paragraphAfterImage: `In conclusion, my story is a testament to the fact that passion and perseverance can take you far,
        even in the face of obstacles.
        I hope that my journey will inspire others to follow their dreams and never give up on what they truly love.`,
        commentsData: [{}],
        repliesData: [{}],
    },

    {
        title: "Best Way to Design",
        image: "images/blog/blog-1.jpg",
        category: "Web Design",
        date: "May 10, 2021",
        initialParagraph: `is
        simply dummy text of the printing is
        simply dummy text of the printing
        and typesetting industry. Lorem
        Ipsum has been the industry's
        standard dummy text ever since the
        1500s, when an unknown printer took
        a galley of type and scrambled it to
        make a type specimen book. It has
        survived not only five centuries,
        but also the leap into electronic
        typesetting, remaining essentially
        unchanged. It was popularised in the
        1960s with the release of Letraset
        sheets containing Lorem Ipsum
        passages, and more recently with
        desktop publishing software like
        Aldus PageMaker including versions
        of Lorem Ipsum.`,
        paragraphHeading: `First, solve the problem. Then write
        the code.`,
        quote: "In some ways, programming is",
        quoteWriter: "Andrew Hunt",
        secondParagraph: `The standard chunk of Lorem Ipsum
        make a type specimen book. It has
        survived not only five centuries,
        but also the leap into electronic
        typesetting, remaining essentially
        unchanged. It was popularised in the
        1960s with the release of Letraset
        sheets containing Lorem Ipsum
        passages, and more recently with
        desktop publishing software like
        Aldus PageMaker including versions
        of Lorem Ipsum.`,
        images: [
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img1.jpg",
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img2.jpg",
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img3.jpg",
        ],
        paragraphAfterImage: `Contrary to popular belief, Lorem
        1960s with the release of Letraset
        sheets containing Lorem Ipsum
        passages, and more recently with
        desktop publishing software like
        Aldus PageMaker including versions
        of Lorem Ipsum.`,
    },
    {
        title: "Best Way to Design",
        image: "images/blog/blog-1.jpg",
        category: "Web Design",
        date: "May 10, 2021",
        initialParagraph: `is
        simply dummy text of the printing is
        simply dummy text of the printing
        and typesetting industry. Lorem
        Ipsum has been the industry's
        standard dummy text ever since the
        1500s, when an unknown printer took
        a galley of type and scrambled it to
        make a type specimen book. It has
        survived not only five centuries,
        but also the leap into electronic
        typesetting, remaining essentially
        unchanged. It was popularised in the
        1960s with the release of Letraset
        sheets containing Lorem Ipsum
        passages, and more recently with
        desktop publishing software like
        Aldus PageMaker including versions
        of Lorem Ipsum.`,
        paragraphHeading: `First, solve the problem. Then write
        the code.`,
        quote: "In some ways, programming is",
        quoteWriter: "Andrew Hunt",
        secondParagraph: `The standard chunk of Lorem Ipsum
        make a type specimen book. It has
        survived not only five centuries,
        but also the leap into electronic
        typesetting, remaining essentially
        unchanged. It was popularised in the
        1960s with the release of Letraset
        sheets containing Lorem Ipsum
        passages, and more recently with
        desktop publishing software like
        Aldus PageMaker including versions
        of Lorem Ipsum.`,
        images: [
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img1.jpg",
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img2.jpg",
            "https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img3.jpg",
        ],
        paragraphAfterImage: `Contrary to popular belief, Lorem
        1960s with the release of Letraset
        sheets containing Lorem Ipsum
        passages, and more recently with
        desktop publishing software like
        Aldus PageMaker including versions
        of Lorem Ipsum.`,
        commentsData: [{}],
        repliesData: [{}],
    },
];
