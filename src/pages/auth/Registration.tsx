import React from "react";
import { Helmet } from "react-helmet";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../../components/PageTemplate";
import RegistrationForm from "../../components/forms/registration/single/RegistrationForm";

const Registration: React.FC = () => {
    return (
        <>
            {" "}
            <Helmet>
                <title>
                    Welcome Register An Account on Qandeel Haider Khan Portfolio
                    - Python Django React Full Stack Developer
                </title>
                <meta
                    name="description"
                    content="Get to know Qandeel Khan, a Full Stack Developer with expertise in Python, Django, React, and DevOps. Discover his experience, achievements, and future goals."
                />
                <meta
                    name="keywords"
                    content="Qandeel Khan, Full Stack Developer, Python, Django, React, Redux, TypeScript, DevOps, About, Experience, Achievements, Goals"
                />
                <meta name="author" content="Qandeel Khan" />
                <meta name="robots" content="index,follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
            <PageTemplate
                iconComponent={<AboutUserIcon />}
                pageName="Registration."
            >
                {/* <RegistrationFormOld /> */}
                <RegistrationForm />
            </PageTemplate>
        </>
    );
};

export default Registration;
