import React from "react";
import ChangingText from "../components/ChangingText";
import { motion } from "framer-motion";
import "./home.css";
import ThemesGear from "../components/ThemesGear";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Home() {
    const text = ["Photographer", "Web Designer", "Software Developer"];

    return (
        <section id="home" className="home-container">
            <div className="main-image-area"></div>
            <div className="banner-text">
                <span className="banner-qandeel">QANDEEL</span>
                <span className="banner-khan">KHAN</span>
                <ChangingText text={text} />
                {/* <MyComponent /> */}
            </div>
        </section>
    );
}

export default Home;
