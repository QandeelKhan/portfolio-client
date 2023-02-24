import React from "react";
import AboutUserIcon from "../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../components/PageTemplate";
import { Helmet } from "react-helmet";

const UnderConstruction: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Qandeel Khan - Under Construction</title>
                <meta
                    name="description"
                    content="Qandeel Khan's website is under construction, check back soon for updates."
                />
                <meta
                    name="keywords"
                    content="Qandeel Khan, Under Construction, Full Stack Developer, Python Django, React TypeScript"
                />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="revisit-after" content="1 days" />
                <link
                    rel="canonical"
                    href="https://www.qandeelkhan.com/under-construction"
                />
            </Helmet>
            <PageTemplate
                iconComponent={<AboutUserIcon />}
                pageName="Blog."
            ></PageTemplate>
        </>
    );
};

export default UnderConstruction;
