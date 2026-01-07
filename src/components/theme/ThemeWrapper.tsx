import { motion, AnimatePresence } from "framer-motion";
import { myThemeState } from "../../redux/themeSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

const ThemeWrapper: React.FC<{ children: React.ReactElement }> = ({
    children,
}) => {
    const selectedTheme = useSelector(
        (state: RootState) => state.themes.selectedTheme.theme
    );

    // Track the current theme to ensure it's applied correctly
    const [currentTheme, setCurrentTheme] = useState(
        selectedTheme || myThemeState.themes[0].theme
    );

    // Update the current theme when the selected theme changes
    useEffect(() => {
        if (selectedTheme && Object.keys(selectedTheme).length > 0) {
            setCurrentTheme(selectedTheme);
            console.log("Theme updated to:", selectedTheme);
        }
    }, [selectedTheme]);

    return (
        <>
            {console.log("Current theme being applied:", currentTheme)}
            <AnimatePresence mode="wait">
                <motion.div
                    key={JSON.stringify(currentTheme)} // Force re-render when theme changes
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    transition={{ duration: 1 }}
                    variants={currentTheme}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default ThemeWrapper;
