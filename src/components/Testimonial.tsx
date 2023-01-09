import React from "react";

const Testimonial: React.FC = (props) => {
    return (
        <>
            <div className="testimonials-area">
                <h3 className="subheading">
                    <span>TESTOMONIALS</span>
                </h3>
                <div className="testimonials">
                    {/* left side */}
                    <div className="left-testimonial">
                        <div className="review-testimonial">
                            <div className="testimonial-icon">
                                <i className="fa-solid fa-comments"></i>
                            </div>
                            <div className="comment-review">
                                <span>
                                    Ipsum ab necessitatibus numquam vitae quis.
                                    Nobis nostrum deserunt suscipit eos fugit.
                                    Consectetur dolorum temporibus facilis
                                    impedit exercitationem dignissimos.
                                </span>
                            </div>
                        </div>
                        <div className="person-info">
                            <img src="./testi-img1.jpg" alt="person-img" />
                            <div className="name-and-skill">
                                <span className="reviewer-name">
                                    Emma Jones
                                </span>
                                <span className="reviewer-skills">
                                    Creative Director
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* right side  */}
                    <div className="right-testimonial">
                        <div className="review-testimonial">
                            <div className="testimonial-icon">
                                <i className="fa-solid fa-comments"></i>
                            </div>
                            <div className="comment-review">
                                <span>
                                    Ipsum ab necessitatibus numquam vitae quis.
                                    Nobis nostrum deserunt suscipit eos fugit.
                                    Consectetur dolorum temporibus facilis
                                    impedit exercitationem dignissimos.
                                </span>
                            </div>
                        </div>
                        <div className="person-info">
                            <img src="testi-img2.jpg" alt="person-img" />
                            <div className="name-and-skill">
                                <span className="reviewer-name">
                                    Jack Smith
                                </span>
                                <span className="reviewer-skills">
                                    Marketing Director
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
