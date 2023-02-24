import * as React from "react";
const PhoneIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        // viewBox height, width
        {...props}
        viewBox="0 0 20 20"
        className="nav-icon"
        fill="white"
        //  fill="currentColor" {...props}
    >
        <path
            fill=" #00a3e1"
            d="M10.5 18h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1z"
        />
        <path
            fill=" #00a3e1"
            d="M14.5 20h-9c-.827 0-1.5-.673-1.5-1.5v-17C4 .673 4.673 0 5.5 0h9c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5zm-9-19a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-9z"
        />
        <path
            fill=" #00a3e1"
            d="M13.5 16h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5zM7 15h6V3H7v12z"
        />
    </svg>
);
export default PhoneIcon;
