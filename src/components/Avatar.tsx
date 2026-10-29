import React from "react";
import "./css/avatar.css";

interface AvatarProps {
    name: string;
    imageSource?: string;
    size?: "small" | "medium" | "large";
}

const Avatar: React.FC<AvatarProps> = ({ name, imageSource, size = "medium" }) => {
    // Function to generate initials from name
    const getInitials = (fullName: string): string => {
        const nameParts = fullName.trim().split(/\s+/);
        
        if (nameParts.length >= 2) {
            // First and last name available
            const firstInitial = nameParts[0][0];
            const lastInitial = nameParts[nameParts.length - 1][0];
            return (firstInitial + lastInitial).toUpperCase();
        } else if (nameParts.length === 1 && nameParts[0].length >= 2) {
            // Only first name, take first two letters
            return nameParts[0].substring(0, 2).toUpperCase();
        } else if (nameParts.length === 1 && nameParts[0].length === 1) {
            // Single letter name
            return nameParts[0].toUpperCase();
        }
        
        return "??"; // Fallback
    };

    // Check if this is Qandeel Khan's profile
    const isQandeelKhan = name.toLowerCase().includes("qandeel") && 
                          name.toLowerCase().includes("khan");

    // Only show image for Qandeel Khan
    const shouldShowImage = isQandeelKhan && imageSource;

    // Generate background color based on name (consistent color for same name)
    const getBackgroundColor = (name: string): string => {
        const colors = [
            "#00a3e1", // Primary blue
            "#4CAF50", // Green
            "#FF9800", // Orange
            "#9C27B0", // Purple
            "#E91E63", // Pink
            "#3F51B5", // Indigo
            "#009688", // Teal
            "#FF5722", // Deep Orange
        ];
        
        // Generate consistent index based on name
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % colors.length;
        return colors[index];
    };

    if (shouldShowImage) {
        return (
            <div className={`avatar avatar-${size} avatar-image`}>
                <img
                    src={imageSource}
                    alt={`${name}'s profile`}
                    className="avatar-img"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
            </div>
        );
    }

    // Show initials
    const initials = getInitials(name);
    const backgroundColor = getBackgroundColor(name);

    return (
        <div 
            className={`avatar avatar-${size} avatar-initials`}
            style={{ backgroundColor }}
        >
            <span className="avatar-text">{initials}</span>
        </div>
    );
};

export default Avatar;
