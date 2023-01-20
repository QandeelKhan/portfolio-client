import React from "react";
import PortfolioBriefcase from "../components/icons/PortfolioBriefcase";
import PortfolioPage from "./PortfolioPage";
import "./portfolio.css";
import PageTemplate from "../components/PageTemplate";
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
                <PageTemplate
                    iconComponent={<PortfolioBriefcase />}
                    pageName="Portfolio."
                >
                    <PortfolioPage />
                </PageTemplate>
            </section>
        </motion.div>
    );
};

export default Portfolio;
