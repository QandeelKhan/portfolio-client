import React from "react";
import AboutUserIcon from "../components/icons/AboutUser";
import PageTemplate from "../components/PageTemplate";

const UnderConstruction = () => {
    return (
        <>
            <PageTemplate
                iconComponent={<AboutUserIcon />}
                pageName="Blog."
            ></PageTemplate>
        </>
    );
};

export default UnderConstruction;
