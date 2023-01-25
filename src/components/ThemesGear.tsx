import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setVariant, variants } from "../redux/themeSlice";
import "./my-component.css";
interface Theme {
    name: string;
    className: string;
}

const themes: Theme[] = [
    {
        name: "Theme1",
        className: "theme-1",
    },
    {
        name: "Theme2",
        className: "theme-2",
    },
    {
        name: "Theme3",
        className: "theme-3",
    },
    // additional themes here
].map((t) => ({ ...t, name: t.name || "" }));

interface Props {}

const ThemesGear: React.FC<Props> = () => {
    const [isGearOpen, setIsGearOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState<string>(
        themes[0].className
    );
    const theme = useSelector((state: RootState) => state.theme); // changed this line
    useEffect(() => {
        setSelectedTheme(theme);
    }, [theme]);

    const dispatch = useDispatch();

    const handleGearClick = () => {
        setIsGearOpen(!isGearOpen);
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheme(event.target.value);
        const themeName = themes.find(
            (t) => t.className === event.target.value
        )?.name;
        switch (themeName) {
            case "Theme1":
            case "Theme2":
            case "Theme3":
                // dispatch(setVariant(themeName));
                break;
            default:
                console.error("Invalid theme name:", themeName);
        }
    };

    return (
        <div
            className={`gear-container ${selectedTheme} ${
                isGearOpen ? "gear-container-open" : ""
            }`}
        >
            <div className={`gear-icon`} onClick={handleGearClick}>
                <i className="fas fa-cog fa-spin" />
            </div>

            <div className={`gear-menu ${isGearOpen ? "" : "gear-menu-open"}`}>
                <h6>Page Animation</h6>
                <select className="gear-select" onChange={handleThemeChange}>
                    {themes.map((theme) => (
                        <option
                            key={theme.className}
                            value={theme.className}
                            selected={theme.className === selectedTheme}
                        >
                            {theme.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ThemesGear;
