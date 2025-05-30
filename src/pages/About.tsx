import React from "react";
import ClientsSlide from "../components/ClientsSlide";
import AboutUserIcon from "../components/icons/ResumeModeIcons/AboutUser";
import ServicesArea from "../components/ServicesArea";
import TestimonialsSection from "../components/TestimonialsSection";
import PageTemplate from "../components/PageTemplate";
import { Helmet } from "react-helmet";
import "./css/about.css";
import cv from "../assets/cv.pdf";

const About: React.FC = (props: any) => {
    return (
        <>
            <Helmet>
                <title>
                    About Qandeel Khan - Python Django React Full Stack
                    Developer
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
            <PageTemplate iconComponent={<AboutUserIcon />} pageName="Blog.">
                <div className="about-all-info">
                    <div className="about-left-info">
                        <h3 className="ui-ux-designer">
                            {/* UI/UX Designer & Developer */}
                            Full-Stack Engineer & Author
                        </h3>
                        <span className="uiux-dummy-text">
                            I am a Python and JavaScript developer with a
                            bachelor’s degree in Computer Science from GC
                            University Faisalabad and 6 years of software
                            development experience. I am experienced in web
                            development with JavaScript technologies using
                            modern cutting edge technology stack for the
                            front-end of my applications i.e React and Next.JS &
                            React Native for hybrid mobile applications
                            development & on the back-end side, I use python
                            technologies. I have experience with MVT(Model View
                            Template) and MVC(Model View Controller) through
                            Django and DRF (Django rest framework), and I have
                            been involved in maintaining versions of source code
                            using git version control.
                            <br />I use a containerized system using Docker for
                            portability of my web and mobile projects and
                            deployment. When working on a new project, I like to
                            speak with my clients to understand their needs and
                            vision of the project clearly.
                            <br />
                            Thank you so much for taking the time to review my
                            profile. I look forward to the opportunity of
                            working with you.
                            <br />
                            If you are interested in collaborating with me,
                            please feel free to contact me at
                            com.qandeelhaider@gmail.com
                            <br />
                            <br />
                        </span>
                        <div className="signature-area">
                            <img
                                src="images/other/signature.png"
                                alt="qandeel baloch signature"
                            />
                        </div>
                    </div>
                    <div className="about-right-info">
                        <h3 className="personel-info-heading">
                            Personal Information
                        </h3>
                        <ul>
                            <li className="personal-info-list">
                                <span className="personal-info-title">
                                    <span> Name </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span>Qandeel Khan</span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Age </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span>27 Years</span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Residence </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span> Punjab, Pakistan </span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Address </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span> Sargodha,Pakistan </span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Email </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span>com.qandeelhaider@gmail.com</span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span> Phone </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span> (+92) 315 7051 720 </span>
                                </span>
                            </li>
                            <li>
                                <span className="personal-info-title">
                                    <span>Freelance </span>
                                </span>{" "}
                                <span className="personal-info-value">
                                    <span> Available </span>
                                </span>
                            </li>
                        </ul>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            // href={require("../components/icons/cv.pdf")} // because vite do not support CommonJS require syntax for importing assets and only support ES modules "import" syntax or the "new URL" syntax.
                            href={cv}
                            className="download-resume-btn"
                        >
                            DOWNLOAD RESUME
                        </a>
                    </div>
                </div>
                {/* service area */}
                <ServicesArea />
                {/* Clients Slider */}
                <ClientsSlide />
                {/* Testimonials area */}
                <TestimonialsSection />
            </PageTemplate>
        </>
    );
};

export default About;
