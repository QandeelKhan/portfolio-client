import React from "react";
import ClientsSlide from "../components/ClientsSlide";
import AboutUserIcon from "../components/icons/ResumeModeIcons/AboutUser";
import ServicesArea from "../components/ServicesArea";
import TestimonialsSection from "../components/TestimonialsSection";
import "./css/about.css";
import PageTemplate from "../components/PageTemplate";
import { Helmet } from "react-helmet";

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
                            Fulls-tack Engineer & Author
                        </h3>
                        <span className="uiux-dummy-text">
                            I am a Python and JavaScript developer with having
                            bachelor's in Computer Science (B.S). from GC
                            University Faisalabad and 4 years of software
                            development experience. I am experienced in web
                            development with JavaScript technologies using React
                            JS and React Native and on the back-end side, I'm
                            using python technologies. I have experience with
                            MVT/MVC (Model View Template/Controller) through
                            Django and DRF (Django rest framework) and have been
                            involved in maintaining versions of source code
                            using git version control. I use a containerized
                            system using Docker/Kubernetes for the portability
                            of my web and mobile projects and deployment. When
                            working on a new project, I like to speak with my
                            clients to understand their needs and version of the
                            project clearly. Thanks for going through my
                            profile, looking forward to be working with you.
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
                                    <span>26 Years</span>
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
                            href={require("../components/icons/resume.pdf")}
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
