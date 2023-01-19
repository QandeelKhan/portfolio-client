import React from "react";
import { useDispatch } from "react-redux";
import {
    setCardClicked,
    setCrossClicked,
    setMyClassName,
} from "../redux/eventsSlice";
import Masonry from "react-masonry-css";
import "./portfolio-detail.css";
import "../pages/portfolio.css";
import GridItem from "../components/GridItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PortfolioPage: React.FC = (props: any) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        900: 2,
        700: 1,
    };

    const dispatch = useDispatch();
    const { myClassName } = useSelector((state: RootState) => state.events);

    const clickState = () => {
        dispatch(setCardClicked(true));
        dispatch(setCrossClicked(false));
        dispatch(setMyClassName("active"));
        console.log(myClassName);
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
                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-1.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-file"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-10.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-image"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-9.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-video"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-8.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-image"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-11.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-file"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-6.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-file"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-5.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-file"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-5.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-file"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-7.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-file"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-3.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-file"></i>}
                />

                <GridItem
                    onClick={clickState}
                    imgSrc={"images/portfolio/portfolio-4.jpg"}
                    title={"Book Design"}
                    category={"Graphic"}
                    icon={<i className="fa-solid fa-file"></i>}
                />
            </Masonry>
        </div>
    );
};

export default PortfolioPage;
