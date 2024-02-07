import React from "react";
import Markdown from "react-markdown";
import "./md-style.css";
import { defaultDescription } from "./mdText";

type MDTextProps = {
    descriptionMDText?: string;
};
const MDText: React.FC<MDTextProps> = ({
    descriptionMDText = defaultDescription,
}) => {
    return (
        <div className="description-md-container">
            <Markdown className="description-md">{descriptionMDText}</Markdown>
        </div>
    );
};
export default MDText;
