import React from "react";
import ChangingText from "../components/ChangingText";
import { motion } from "framer-motion";
import "./home.css";
import MyComponent from "../components/MyComponent";

function Home() {
    const text = ["Photographer", "Web Designer", "Software Developer"];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: "0.4s" }}
        >
            <section id="home" className="home-container">
                <div className="main-image-area"></div>
                <div className="banner-text">
                    <span className="banner-qandeel">QANDEEL</span>
                    <span className="banner-khan">KHAN</span>
                    <ChangingText text={text} />
                    {/* <MyComponent /> */}
                </div>
            </section>
        </motion.div>
    );
}

export default Home;
