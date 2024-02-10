import React, { ChangeEvent } from "react";

interface UploadIconProps {
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UploadIcon: React.FC<UploadIconProps> = ({ handleFileChange }) => {
    return (
        <div>
            <label htmlFor="file-input" className="profile-icon fa fa-image">
                <input
                    type="file"
                    id="file-input"
                    onChange={handleFileChange}
                    className="choose-img"
                    style={{
                        display: "none",
                    }}
                />
            </label>
        </div>
    );
};

export default UploadIcon;
