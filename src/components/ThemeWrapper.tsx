import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { selectTheme, setVariant, variants } from "../redux/themeSlice";

interface Props {
    children: React.ReactNode;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
    const selectedTheme = useSelector(selectTheme) as
        | "theme1"
        | "theme2"
        | "theme3";
    const variant = variants[selectedTheme];

    return (
        <AnimatePresence>
            <motion.div
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                transition={{ duration: 1 }}
                variants={variant}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default ThemeWrapper;
