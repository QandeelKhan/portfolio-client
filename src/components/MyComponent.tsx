import React, { useState } from "react";
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

interface Props {}

const MyComponent: React.FC<Props> = () => {
    const [isGearOpen, setIsGearOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState<string>(
        themes[0].className
    );

    const handleGearClick = () => {
        setIsGearOpen(!isGearOpen);
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheme(event.target.value);
    };

    return (
        <div className={`page-container ${selectedTheme}`}>
            <div
                className={`gear-icon ${isGearOpen ? "gear-open" : ""}`}
                onClick={handleGearClick}
            >
                <i className="fas fa-cog fa-spin" />
            </div>
            {isGearOpen && (
                <div className="gear-menu">
                    <h6>Page Animation</h6>
                    <select
                        className="gear-select"
                        onChange={handleThemeChange}
                    >
                        {themes.map((theme) => (
                            <option
                                key={theme.className}
                                value={theme.className}
                                selected={selectedTheme === theme.className}
                            >
                                {theme.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default MyComponent;
