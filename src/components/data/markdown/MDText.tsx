import React from "react";
import Markdown from "react-markdown";
import "./md-style.css";
import MDTextData from "./mdText";

type MDTextProps = {
    descriptionMDText?: string;
};
const MDText: React.FC<MDTextProps> = ({
    descriptionMDText = MDTextData.defaultDescription,
}) => {
    return (
        <div className="description-md-container">
            <Markdown className="description-md">{descriptionMDText}</Markdown>
        </div>
    );
};
export default MDText;
