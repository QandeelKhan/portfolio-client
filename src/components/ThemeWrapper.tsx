import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectStyles, selectTheme } from "../redux/themeSlice";

interface Props {
    children: React.ReactNode;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
    const selectedTheme = useSelector(selectTheme);
    const styles = useSelector(selectStyles);

    const variants: Variants = {
        initial: styles.pageInitial,
        animate: styles.pageAnimate,
        exit: styles.pageExit,
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={variants.initial}
                animate={variants.animate}
                exit={variants.exit}
                transition={{ duration: 1 }}
                variants={variants}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default ThemeWrapper;
