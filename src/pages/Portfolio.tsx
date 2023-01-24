import React from "react";
import PortfolioBriefcase from "../components/icons/PortfolioBriefcase";
import PortfolioPage from "./PortfolioPage";
import "./portfolio.css";
import PageTemplate from "../components/PageTemplate";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Portfolio: React.FC = () => {
    return (
        <section id="resume-section">
            <PageTemplate
                iconComponent={<PortfolioBriefcase />}
                pageName="Portfolio."
            >
                <PortfolioPage />
            </PageTemplate>
        </section>
    );
};

export default Portfolio;
