import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import PageTemplate from "../../components/PageTemplate";
import { ProjectTrackingChart } from "../../components/ProjectTrackingChart";

const TrackOrder = () => {
    useEffect(() => {});
    return (
        <>
            <Helmet>
                <title>My Blog | Programming, Qandeel Khan, and More</title>
                <meta
                    name="description"
                    content="Stay updated with the latest programming knowledge, learn about the life of Qandeel Khan, and more with my blog."
                />
                <meta
                    name="keywords"
                    content="programming, react, django, qandeel khan, devops, redux, typescript, history, blog"
                />
            </Helmet>

            <PageTemplate
                iconComponent={<AboutUserIcon />}
                pageName="Track Your Order."
            >
                <ProjectTrackingChart />
            </PageTemplate>
            {/* <h1 style={{ textAlign: "center" }}>Track Your Order.</h1> */}
        </>
    );
};

export default TrackOrder;
