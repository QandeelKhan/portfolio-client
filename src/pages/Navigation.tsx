import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Contact from "./Contact";
import Blog from "./Blog";
import Resume from "./Resume";
import About from "./About";
import Home from "./Home";
import "./home.css";
import SideNav from "../components/SideNav";

interface Props {
    currentPage: string;
    handleClick: (page: string) => void;
}

const Navigation: React.FC<Props> = ({ currentPage, handleClick }) => {
    return (
        <div>
            <SideNav />
            <nav>
                <ul>
                    <li onClick={() => handleClick("home")}>Home</li>
                    <li onClick={() => handleClick("about")}>About</li>
                    <li onClick={() => handleClick("resume")}>Resume</li>
                    <li onClick={() => handleClick("blog")}>Blog</li>
                    <li onClick={() => handleClick("contact")}>Contact</li>
                </ul>
            </nav>
            <CSSTransition
                in={currentPage === "home"}
                timeout={300}
                classNames="page"
                unmountOnExit
            >
                <Home />
            </CSSTransition>
            <CSSTransition
                in={currentPage === "about"}
                timeout={300}
                classNames="page"
                unmountOnExit
            >
                <About />
            </CSSTransition>
            <CSSTransition
                in={currentPage === "resume"}
                timeout={300}
                classNames="page"
                unmountOnExit
            >
                <Resume />
            </CSSTransition>
            <CSSTransition
                in={currentPage === "blog"}
                timeout={300}
                classNames="page"
                unmountOnExit
            >
                <Blog />
            </CSSTransition>
            <CSSTransition
                in={currentPage === "contact"}
                timeout={300}
                classNames="page"
                unmountOnExit
            >
                <Contact />
            </CSSTransition>
        </div>
    );
};

export default Navigation;

// Here in this example, I've defined an interface for the component props which includes currentPage and handleClick as its properties of type string. Also, I've used React.FC which stands for "Functional Component" and passed the interface as a generic type argument.
// Now TypeScript will know that the handleClick function expects a parameter of type string, and will not generate any errors.
