import React from "react";
import AboutUserIcon from "../components/icons/AboutUser";
import ResumeHeader from "../components/ResumeHeader";

const UnderConstruction = () => {
    return (
        <>
            <ResumeHeader
                iconComponent={<AboutUserIcon />}
                pageName="Blog."
            ></ResumeHeader>
        </>
    );
};

export default UnderConstruction;
