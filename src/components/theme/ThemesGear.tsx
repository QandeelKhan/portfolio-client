import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setGearOpen } from "../../redux/reducers/eventsSlice";
import { RootState } from "../../redux/store";
import { setSelectedTheme, setThemeName } from "../../redux/themeSlice";
import "./themes-gear.css";

interface Props { }

const ThemesGear: React.FC<Props> = () => {
    const themeName = useSelector((state: RootState) => state.themes.themeName);
    const { gearOpen } = useSelector((state: RootState) => state.events);
    const themes = useSelector((state: RootState) => state.themes.themes);
    const selectedTheme = useSelector(
        (state: RootState) => state.themes.selectedTheme
    );

    // Track the current theme name for the select dropdown
    const [currentThemeName, setCurrentThemeName] = useState(themeName || "theme1");

    const dispatch = useDispatch();

    const handleGearClick = () => {
        dispatch(setGearOpen(!gearOpen));
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedThemeName = event.target.value;
        setCurrentThemeName(selectedThemeName);

        // Find the theme object by name
        const themeObject = themes.find(
            (theme) => theme.name === selectedThemeName
        );

        if (themeObject) {
            // Update both the selected theme and theme name in Redux
            dispatch(setSelectedTheme(themeObject.theme));
            dispatch(setThemeName(selectedThemeName));

            console.log("Theme changed to:", selectedThemeName);
            console.log("Theme object:", themeObject.theme);
        }
    };

    // Initialize with the current theme name when component mounts
    useEffect(() => {
        if (themeName) {
            setCurrentThemeName(themeName);
        }
    }, [themeName]);

    return (
        <>
            {console.log("Current theme name:", currentThemeName)}
            <div
                className={`gear-container ${ currentThemeName } ${ gearOpen ? "gear-container-open" : ""
                    }`}
            >
                <div className={`gear-icon`} onClick={handleGearClick}>
                    <i className="fas fa-cog fa-spin" />
                </div>

                <div
                    className={`gear-menu ${ gearOpen ? "" : "gear-menu-open" }`}
                >
                    <h6>Page Animation</h6>
                    <select
                        className="gear-select"
                        onChange={handleThemeChange}
                        value={currentThemeName}
                    >
                        {themes.map((theme: any) => (
                            <option key={theme.name} value={theme.name}>
                                {theme.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default ThemesGear;
