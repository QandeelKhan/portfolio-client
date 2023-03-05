import React from "react";
import ProfileUpdateForm from "../../components/forms/ProfileUpdateForm";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/PageTemplate";
import AboutUserIcon from "../../components/icons/ResumeModeIcons/AboutUser";
import "../css/profile.css";

const Profile = () => {
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
                pageName="User Profile."
            >
                <div className="profile-container">
                    <ProfileUpdateForm />
                </div>
            </PageTemplate>
        </>
    );
};

export default Profile;
