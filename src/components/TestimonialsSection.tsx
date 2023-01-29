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
                                                Qandeel's knowledge of full
                                                stack Python technologies helped
                                                our e-commerce project soar. His
                                                dedication and attention to
                                                detail truly made a difference.
                                                {/* "facebook.com/marketerzlab"
                                                "instagram.com/marketerzlab"
                                                "helps the businesses grow with
                                                the help of social media" */}
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
                                                src="images/testimonial/muhammad-dp.jpg"
                                                alt="person-img"
                                            />
                                        </div>
                                        <div className="name-and-skill">
                                            <span className="reviewer-name">
                                                Muhammad Bin Abdulrehman
                                            </span>
                                            <span className="reviewer-skills">
                                                CEO of Marketerz Lab(A leading
                                                SMMA company of Pakistan)
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
                                                Qandeel Khan's work on
                                                pcconline.co.za has been a major
                                                success for our online sales,
                                                thanks to the user-friendly
                                                design.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            style={{
                                                maxHeight: "70px",
                                                maxWidth: "70px",
                                            }}
                                            src="images/testimonial/usama-dp.jpeg"
                                            alt="person-img"
                                        />
                                        <div className="name-and-skill">
                                            <span className="reviewer-name">
                                                Usama Shafeeq
                                            </span>
                                            <span className="reviewer-skills">
                                                Marketing Director on pcconline
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
                                                Thanks to Qandeel, my online
                                                store's revenue has seen a
                                                significant increase. Their
                                                professional development
                                                services are second to none.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="person-info">
                                        <img
                                            style={{
                                                maxHeight: "60px",
                                                // maxWidth: "60px",
                                            }}
                                            src="images/testimonial/sadi-dp.jpeg"
                                            alt="person-img"
                                        />
                                        <div className="name-and-skill">
                                            <span className="reviewer-name">
                                                Sadi
                                            </span>
                                            <span className="reviewer-skills">
                                                e-commerce entrepreneur
                                                {/* (Successful seller on ebay,
                                                amazon and etsy, and crypto
                                                expert.) facebook.com/ */}
                                                {/* https://www.facebook.com/profile.php?id=100011154134681&sk=photos */}
                                                {/* https://www.twitter.com/saadmah83015242 */}
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
