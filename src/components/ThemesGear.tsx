import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, setThemeState } from "../redux/themeSlice";
import "./my-component.css";

interface Theme {
    name: string;
    className: string;
}

const themes: Theme[] = [
    {
        name: "Theme 1",
        className: "theme-1",
    },
    {
        name: "Theme 2",
        className: "theme-2",
    },
    {
        name: "Theme 3",
        className: "theme-3",
    },
    // additional themes here
];

const ThemesGear: React.FC = () => {
    const [isGearOpen, setIsGearOpen] = useState(false);
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    useEffect(() => {
        const themeClasses = ["theme-1", "theme-2", "theme-3"];
        themeClasses.forEach((themeClass) => {
            document.body.classList.remove(themeClass);
        });
        document.body.classList.add(theme);
    }, [theme]);

    const handleGearClick = () => {
        setIsGearOpen(!isGearOpen);
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newThemeName = event.target.value;
        const newTheme = themes.find((t) => t.name === newThemeName);
        if (newTheme) {
            dispatch(setThemeState(newTheme.className));
        }
    };
    // if (!theme) theme = "theme-1";

    return (
        <div>
            <div
                className={`gear-container ${theme} ${
                    isGearOpen ? "gear-container-open" : ""
                }`}
            >
                <div className={`gear-icon`} onClick={handleGearClick}>
                    <i className="fas fa-cog fa-spin" />
                </div>

                <div
                    className={`gear-menu ${
                        isGearOpen ? "" : "gear-menu-open"
                    }`}
                >
                    <h6>Page Animation</h6>
                    <select
                        className="gear-select"
                        onChange={handleThemeChange}
                        value={theme}
                    >
                        {themes.map((themeOption) => (
                            <option
                                key={themeOption.className}
                                value={themeOption.name}
                            >
                                {themeOption.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ThemesGear;
