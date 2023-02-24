import React from "react";
import { Helmet } from "react-helmet";
import LoginForm from "../../components/forms/LoginForm";
import RegFormGoogle from "../../components/forms/RegFormGoogle";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../../components/PageTemplate";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>
                    Login To Qandeel Haider Khan Portfolio - Python Django React
                    FullStack Developer
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
                <LoginForm />
            </PageTemplate>
        </>
    );
};

export default Login;
