import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleColorTheme } from "../../redux/colorThemeSlice";
import "./theme-toggle.css";

const ThemeToggle: React.FC = () => {
    const dispatch = useDispatch();
    const colorTheme = useSelector((state: RootState) => state.colorTheme.mode);
    
    const handleToggle = () => {
        dispatch(toggleColorTheme());
    };

    return (
        <div className="theme-toggle-container">
            <button 
                className="theme-toggle-button" 
                onClick={handleToggle}
                aria-label={`Switch to ${colorTheme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${colorTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
                <div className={`theme-toggle-track ${colorTheme === 'light' ? 'light' : 'dark'}`}>
                    <div className="theme-toggle-thumb">
                        {colorTheme === 'dark' ? (
                            <i className="fas fa-moon theme-icon moon-icon"></i>
                        ) : (
                            <i className="fas fa-sun theme-icon sun-icon"></i>
                        )}
                    </div>
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;
