import React from "react";
import AboutUserIcon from "../components/icons/AboutUser";
import PageTemplate from "../components/PageTemplate";
import ThemeWrapper from "../components/ThemeWrapper";

const UnderConstruction = () => {
    return (
        <PageTemplate
            iconComponent={<AboutUserIcon />}
            pageName="Blog."
        ></PageTemplate>
    );
};

export default UnderConstruction;
