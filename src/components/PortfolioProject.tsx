import React from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";

const PortfolioProject: React.FC = (props) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        900: 2,
        700: 1,
    };
    return (
        <div className="projects-area">
            <div className="menu-div">
                <ul>
                    <li>
                        <a href="/">ALL</a>
                    </li>
                    <li>
                        <a href="/">GRAPHIC</a>
                    </li>
                    <li>
                        <a href="/">DESIGN</a>
                    </li>
                    <li>
                        <a href="/">BRAND</a>
                    </li>
                </ul>
            </div>
            <Masonry
                className="masonry-grid"
                columnClassName="masonry-grid_column"
                breakpointCols={breakpointColumnsObj}
            >
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <Link to="/portfolio-card-click" className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-1 ">
                                <i className="fa-solid fa-file"></i>
                            </div>
                        </Link>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-1.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-2">
                                <i className="fa-solid fa-image"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-10.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-3">
                                <i className="fa-solid fa-video"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-9.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-4">
                                <i className="fa-solid fa-image"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-8.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-5">
                                <i className="fa-solid fa-file"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-11.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-6">
                                <i className="fa-solid fa-file"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-6.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-7">
                                <i className="fa-solid fa-file"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-5.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-8">
                                <i className="fa-solid fa-file"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-7.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-9">
                                <i className="fa-solid fa-file"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-3.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-10">
                                <i className="fa-solid fa-file"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-2.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <div className="onhover-text">
                                <span className="text-1">Book Design</span>
                                <span className="text-2">Graphic</span>
                            </div>
                            <div className="onhover-icon onhover-icon-11">
                                <i className="fa-solid fa-file"></i>
                            </div>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-4.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
            </Masonry>
        </div>
    );
};

export default PortfolioProject;
