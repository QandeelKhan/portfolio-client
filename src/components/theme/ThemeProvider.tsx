import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const colorTheme = useSelector((state: RootState) => state.colorTheme.mode);

    useEffect(() => {
        // Apply theme to document root on mount and when theme changes
        document.documentElement.setAttribute("data-theme", colorTheme);
    }, [colorTheme]);

    return <>{children}</>;
};

export default ThemeProvider;
