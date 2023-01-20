import React from "react";
import "./blog-detail.css";

const BlogDetail = () => {
    return (
        <div className="post-page-main">
            <div className="post-page-wrapper">
                <div className="post-image">
                    <img
                        className="detail-image"
                        src="images/blog/blog-1.jpg"
                        alt="blog-img"
                    />
                </div>
                <div className="post-wrapper">
                    <div className="post-container">
                        <div className="post-content">
                            <div className="post-headings">
                                <div className="categories">
                                    <a className="category-name" href="#">
                                        Web Design
                                    </a>
                                </div>
                                <h1 className="post-title">
                                    Best Way To Design
                                </h1>
                                <span className="post-date">May 10, 2021</span>
                            </div>
                            <div className="text-content">
                                <div className="post-full-content">
                                    <p className="post-paragraph">
                                        <strong>Lorem Ipsum</strong>&nbsp;is
                                        simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text
                                        ever since the 1500s, when an unknown
                                        printer took a galley of type and
                                        scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </p>
                                    <h4 className="paragraph-heading">
                                        First, solve the problem. Then write the
                                        code.
                                    </h4>
                                    <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is that it has a more-or-less
                                        normal distribution of letters, as
                                        opposed to using ‘Content here, content
                                        here’, making it look like readable
                                        English. Many desktop publishing
                                        packages and web page editors now use
                                        Lorem Ipsum as their default model text,
                                        and a search for ‘lorem ipsum’ will
                                        uncover many web sites still in their
                                        infancy. Various versions have evolved
                                        over the years, sometimes by accident,
                                        sometimes on purpose (injected humour
                                        and the like).
                                    </p>
                                    <blockquote className="block-quote">
                                        <p>
                                            <strong>
                                                In some ways, programming is
                                                like painting. You start with a
                                                blank canvas and certain basic
                                                raw materials. You use a
                                                combination of science, art, and
                                                craft to determine what to do
                                                with them.
                                            </strong>
                                        </p>
                                        <cite className="quote-writer">
                                            <em>Andrew Hunt</em>
                                        </cite>
                                    </blockquote>
                                    <p>
                                        The standard chunk of Lorem Ipsum used
                                        since the 1500s is reproduced below for
                                        those interested. Sections 1.10.32 and
                                        1.10.33 from “de Finibus Bonorum et
                                        Malorum” by Cicero are also reproduced
                                        in their exact original form,
                                        accompanied by English versions from the
                                        1914 translation by H. Rackham.
                                    </p>
                                    <div className="content-images-wrapper">
                                        <figure className="content-image-container">
                                            <img
                                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img1.jpg"
                                                alt=""
                                                className="content-image"
                                            />
                                        </figure>
                                        <figure className="content-image-container">
                                            <img
                                                loading="lazy"
                                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img2.jpg"
                                                alt=""
                                                className="content-image"
                                            />
                                        </figure>
                                        <figure className="content-image-container">
                                            <img
                                                loading="lazy"
                                                src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/blog-img3.jpg"
                                                alt=""
                                                className="content-image"
                                            />
                                        </figure>
                                    </div>
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum
                                        is not simply random text. It has roots
                                        in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin
                                        professor at Hampden-Sydney College in
                                        Virginia, looked up one of the more
                                        obscure Latin words, consectetur, from a
                                        Lorem Ipsum passage, and going through
                                        the cites of the word in classical
                                        literature, discovered the undoubtable
                                        source. Lorem Ipsum comes from sections
                                        1.10.32 and 1.10.33 of “de Finibus
                                        Bonorum et Malorum” (The Extremes of
                                        Good and Evil) by Cicero, written in 45
                                        BC. This book is a treatise on the
                                        theory of ethics, very popular during
                                        the Renaissance. The first line of Lorem
                                        Ipsum, “Lorem ipsum dolor sit amet..”,
                                        comes from a line in section 1.10.32.
                                    </p>
                                </div>
                                <div className="page-links"></div>
                                <div className="post-meta">
                                    <div className="tag-links">
                                        {" "}
                                        <span className="icon">
                                            <i className="fas fa-tag"></i>
                                        </span>{" "}
                                        <a
                                            className="tag-link"
                                            href="https://watson.cosmos-themes.com/dark/tag/design/"
                                            rel="category tag"
                                        >
                                            <span>Design</span>
                                        </a>
                                        <a
                                            className="tag-link"
                                            href="https://watson.cosmos-themes.com/dark/tag/events/"
                                            rel="category tag"
                                        >
                                            <span>Events</span>
                                        </a>
                                        <a
                                            className="tag-link"
                                            href="https://watson.cosmos-themes.com/dark/tag/process/"
                                            rel="category tag"
                                        >
                                            <span>Process</span>
                                        </a>
                                    </div>
                                </div>
                                <nav className="post-navigation" aria-label=" ">
                                    <div className="nav-links">
                                        <i
                                            className="fa fa-chevron-left prev-icon"
                                            aria-hidden="true"
                                        ></i>
                                        <a href="#" rel="prev">
                                            <span className="post-nav-next post-nav-text">
                                                Prev
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                {/* comments section */}

                                <div className="comments-section">
                                    <div className="5-comments">
                                        <h2>5 Comments</h2>
                                    </div>
                                    <div className="comment-div">
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
                                                A component that allows for easy
                                                creation of menu items, quickly
                                                creating paragraphs of “Lorem
                                                Ipsum” and pictures with custom
                                                sizes.
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
                                                A component that allows for easy
                                                creation of menu items, quickly
                                                creating paragraphs of “Lorem
                                                Ipsum” and pictures with custom
                                                sizes.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-div comment-next">
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
                                                A component that allows for easy
                                                creation of menu items, quickly
                                                creating paragraphs of “Lorem
                                                Ipsum” and pictures with custom
                                                sizes.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-div comment-next">
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
                                                A component that allows for easy
                                                creation of menu items, quickly
                                                creating paragraphs of “Lorem
                                                Ipsum” and pictures with custom
                                                sizes.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-div comment-next">
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
                                                A component that allows for easy
                                                creation of menu items, quickly
                                                creating paragraphs of “Lorem
                                                Ipsum” and pictures with custom
                                                sizes.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* comment section ends here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
