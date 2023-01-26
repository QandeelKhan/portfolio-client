import { motion, AnimatePresence } from "framer-motion";
import { myThemeState } from "../redux/themeSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

const ThemeWrapper: React.FC<{ children: React.ReactElement }> = ({
    children,
}) => {
    const selectedTheme = useSelector(
        (state: RootState) => state.themes.selectedTheme.theme
    );

    useEffect(() => {
        // children
    }, [selectedTheme]);

    return (
        <>
            {console.log(selectedTheme, "this is selected theme")}
            <AnimatePresence>
                <motion.div
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    transition={{ duration: 1 }}
                    // variants={selectedTheme}
                    variants={
                        !selectedTheme
                            ? myThemeState.themes[0].theme
                            : selectedTheme
                    }
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default ThemeWrapper;
