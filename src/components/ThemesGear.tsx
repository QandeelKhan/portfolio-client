import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setSelectedTheme } from "../redux/themeSlice";
import "./my-component.css";

interface Props {}

const ThemesGear: React.FC<Props> = () => {
    const themeName = useSelector((state: RootState) => state.themes.themeName);
    const themes = useSelector((state: RootState) => state.themes.themes);
    const selectedTheme = useSelector(
        (state: RootState) => state.themes.selectedTheme
    );
    const [isGearOpen, setIsGearOpen] = useState(false);
    const dispatch = useDispatch();
    const handleGearClick = () => {
        setIsGearOpen(!isGearOpen);
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedThemeName = event.target.value;
        const themeObject = themes.find(
            (theme) => theme.name === selectedThemeName
        );
        dispatch(setSelectedTheme(themeObject?.theme));
        console.log(themeObject?.theme);
        console.log(selectedTheme);
    };

    return (
        <>
            {console.log(themeName, "theme name is")}
            <div
                className={`gear-container ${themeName} ${
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
