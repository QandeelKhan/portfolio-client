import React from "react";
import PortfolioBriefcase from "../components/icons/PortfolioBriefcase";
import PortfolioPage from "./PortfolioPage";
import "./portfolio.css";
import ResumeHeader from "../components/ResumeHeader";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
    return (
        <motion.div
            initial={{ translateX: "100%" }}
            animate={{ opacity: 1, translateX: "0%" }}
            exit={{ opacity: "100%" }}
            transition={{ duration: 1 }}
        >
            <section id="resume-section">
                <ResumeHeader
                    iconComponent={<PortfolioBriefcase />}
                    pageName="Portfolio."
                >
                    <PortfolioPage />
                </ResumeHeader>
            </section>
        </motion.div>
    );
};

export default Portfolio;
