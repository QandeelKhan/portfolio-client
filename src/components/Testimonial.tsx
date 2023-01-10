import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial: React.FC = (props) => {
    return (
        <>
            <div className="testimonials-area">
                <h3 className="subheading">
                    <span>TESTOMONIALS</span>
                </h3>
                <div className="testimonials">
                    <div>
                        <OwlCarousel
                            className="owl-theme owl-loaded owl-drag"
                            loop
                            margin={10}
                            items={2}
                            dots={false}
                            nav={false}
                        >
                            <div className="item">
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
                                        <div className="testimonial-img">
                                            <img
                                                style={{
                                                    maxHeight: "70px",
                                                    maxWidth: "90px",
                                                }}
                                                src="./testi-img1.jpg"
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
                            <div className="item">
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
                                            src="testi-img2.jpg"
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
                            <div className="item">
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
                                            src="./testi-img1.jpg"
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
                            <div className="item">
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
                                            src="testi-img2.jpg"
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
                            <div className="item">
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
                                            src="./testi-img1.jpg"
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
                            <div className="item">
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
                                            src="testi-img2.jpg"
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
                            <div className="item">
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
                                            src="./testi-img1.jpg"
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
                            <div className="item">
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
                                            src="testi-img2.jpg"
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
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
