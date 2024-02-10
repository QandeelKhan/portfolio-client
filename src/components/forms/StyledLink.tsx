import React from "react";
import styles from "./css/StyledLink.module.css";

interface StyledLinkProps {
    href: string;
    title: string;
    text: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, title, text }) => {
    return (
        <a href={href} className={styles["linkToRegistration"]} title={title}>
            {text}
        </a>
    );
};

export default StyledLink;
