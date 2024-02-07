import React from "react";
import { Link, useParams } from "react-router-dom";
import "./portfolio-detail.css";
import { gridItems } from "../../components/data/GridItems";
import MDText from "../../components/data/markdown/MDText";
const PortfolioDetail: React.FC = (props: any) => {
    const { index } = useParams<{ index: string | any }>();
    const itemIndex = parseInt(index, 10);
    console.log(itemIndex);
    const item = gridItems[itemIndex];

    return (
        <div className="default-position">
            <div className="header-fix">
                <Link
                    to="/portfolio"
                    className="fa-solid fa-circle-xmark"
                ></Link>
            </div>
            <div className="main-container">
                {props.children}
                <div className="left-content">
                    <ul className="left-content-list">
                        <span className="heading">{item.title}</span>
                        <li>
                            <span className="second-heading">Project Info</span>
                        </li>
                        <li>
                            <span className="key">Created By </span>
                            <span>:</span>
                            <span> Qandeel Khan</span>
                        </li>
                        <li>
                            <span className="key">Client </span>
                            <span>:</span>
                            <span> {item.client}</span>
                        </li>
                        <li>
                            <span className="key">Date </span>
                            <span>:</span>
                            <span> {item.date}</span>
                        </li>
                        <li>
                            <span className="key">Category </span>
                            <span>:</span>
                            <span> {item.category}</span>
                        </li>
                    </ul>
                </div>
                <div className="right-content">
                    <span className="project-description">
                        Project Description
                    </span>
                    {/* <Markdown
                        rehypePlugins={[rehypeRaw]}
                        className="markdown-content"
                    >
                        {item.description}
                    </Markdown> */}
                    {/* {item.description} */}
                    <MDText descriptionMDText={item.description} />
                    <div className="view-live-container">
                        <div className="view-live">View Live Version</div>
                    </div>
                </div>
                <div className="footer">
                    <div className="images-area">
                        {item.descriptionImgSrc.map(
                            (descriptionImage, index) => (
                                <div className="img-container" key={index}>
                                    <img
                                        src={descriptionImage}
                                        alt="responsive"
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;
