import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials-section.css";

const TestimonialsSection: React.FC = (props) => {
    return (
        <>
            <div className="testimonials-area">
                <h3 className="subheading">
                    <span>TESTOMONIALS</span>
                </h3>
                <div className="testimonials">
                    <div style={{ maxWidth: "1050px" }}>
                        <Slider
                            dots={false}
                            arrows={false}
                            slidesToShow={2}
                            slidesToScroll={1}
                        >
                            <div>
                                {/* left side */}
                                <div className="left-testimonial">
                                    <div className="review-testimonial">
                                        <div className="testimonial-icon">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="comment-review">
                                            <span>
                                                Ipsum ab necessitatibus numquam
                                                vitae quis. Nobis nostrum
                                                deserunt suscipit eos fugit.
                                                Consectetur dolorum temporibus
                                                facilis impedit exercitationem
                                                dignissimos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <div>
                                            <img
                                                style={{
                                                    maxHeight: "70px",
                                                    maxWidth: "90px",
                                                }}
                                                src="images/testimonial/testi-img1.jpg"
                                                alt="person-img"
                                            />
                                        </div>
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
                            </div>
                            {/* right side */}
                            <div>
                                <div className="right-testimonial">
                                    <div className="review-testimonial">
                                        <div className="testimonial-icon">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="comment-review">
                                            <span>
                                                Ipsum ab necessitatibus numquam
                                                vitae quis. Nobis nostrum
                                                deserunt suscipit eos fugit.
                                                Consectetur dolorum temporibus
                                                facilis impedit exercitationem
                                                dignissimos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            style={{
                                                maxHeight: "70px",
                                                maxWidth: "70px",
                                            }}
                                            src="images/testimonial/testi-img2.jpg"
                                            alt="person-img"
                                        />
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
                            <div>
                                {/* left side */}
                                <div className="left-testimonial">
                                    <div className="review-testimonial">
                                        <div className="testimonial-icon">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="comment-review">
                                            <span>
                                                Ipsum ab necessitatibus numquam
                                                vitae quis. Nobis nostrum
                                                deserunt suscipit eos fugit.
                                                Consectetur dolorum temporibus
                                                facilis impedit exercitationem
                                                dignissimos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            src="images/testimonial/testi-img1.jpg"
                                            alt="person-img"
                                            style={{
                                                maxHeight: "70px",
                                                maxWidth: "70px",
                                            }}
                                        />
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
                            </div>
                            {/* left side */}
                            <div>
                                <div className="right-testimonial">
                                    <div className="review-testimonial">
                                        <div className="testimonial-icon">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="comment-review">
                                            <span>
                                                Ipsum ab necessitatibus numquam
                                                vitae quis. Nobis nostrum
                                                deserunt suscipit eos fugit.
                                                Consectetur dolorum temporibus
                                                facilis impedit exercitationem
                                                dignissimos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            style={{
                                                maxHeight: "70px",
                                                maxWidth: "70px",
                                            }}
                                            src="images/testimonial/testi-img2.jpg"
                                            alt="person-img"
                                        />
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
                            <div>
                                {/* left side */}
                                <div className="left-testimonial">
                                    <div className="review-testimonial">
                                        <div className="testimonial-icon">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="comment-review">
                                            <span>
                                                Ipsum ab necessitatibus numquam
                                                vitae quis. Nobis nostrum
                                                deserunt suscipit eos fugit.
                                                Consectetur dolorum temporibus
                                                facilis impedit exercitationem
                                                dignissimos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            style={{
                                                maxHeight: "70px",
                                                maxWidth: "70px",
                                            }}
                                            src="images/testimonial/testi-img1.jpg"
                                            alt="person-img"
                                        />
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
                            </div>
                            {/* left side */}
                            <div>
                                <div className="right-testimonial">
                                    <div className="review-testimonial">
                                        <div className="testimonial-icon">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="comment-review">
                                            <span>
                                                Ipsum ab necessitatibus numquam
                                                vitae quis. Nobis nostrum
                                                deserunt suscipit eos fugit.
                                                Consectetur dolorum temporibus
                                                facilis impedit exercitationem
                                                dignissimos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            style={{
                                                maxHeight: "70px",
                                                maxWidth: "70px",
                                            }}
                                            src="images/testimonial/testi-img2.jpg"
                                            alt="person-img"
                                        />
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
                            <div>
                                {/* left side */}
                                <div className="left-testimonial">
                                    <div className="review-testimonial">
                                        <div className="testimonial-icon">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="comment-review">
                                            <span>
                                                Ipsum ab necessitatibus numquam
                                                vitae quis. Nobis nostrum
                                                deserunt suscipit eos fugit.
                                                Consectetur dolorum temporibus
                                                facilis impedit exercitationem
                                                dignissimos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            style={{
                                                maxHeight: "70px",
                                                maxWidth: "70px",
                                            }}
                                            src="images/testimonial/testi-img1.jpg"
                                            alt="person-img"
                                        />
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
                            </div>
                            {/* left side */}
                            <div>
                                <div className="right-testimonial">
                                    <div className="review-testimonial">
                                        <div className="testimonial-icon">
                                            <i className="fa-solid fa-comments"></i>
                                        </div>
                                        <div className="comment-review">
                                            <span>
                                                Ipsum ab necessitatibus numquam
                                                vitae quis. Nobis nostrum
                                                deserunt suscipit eos fugit.
                                                Consectetur dolorum temporibus
                                                facilis impedit exercitationem
                                                dignissimos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            style={{
                                                maxHeight: "70px",
                                                maxWidth: "70px",
                                            }}
                                            src="images/testimonial/testi-img2.jpg"
                                            alt="person-img"
                                        />
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
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialsSection;
