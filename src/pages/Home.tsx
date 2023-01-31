import ChangingText from "../components/ChangingText";
import { Helmet } from "react-helmet";
import "./css/home.css";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Qandeel Khan - Full Stack Developer | Python, Django, React
                </title>
                <meta
                    name="description"
                    content="Welcome to the portfolio of Qandeel Khan, a Full Stack Developer specializing in Python, Django, and React. Browse his projects, skills, and experience."
                />
                <meta
                    name="keywords"
                    content="Qandeel Khan, Full Stack Developer, Python, Django, React, Portfolio, Projects, Skills, Experience"
                />
                <meta name="author" content="Qandeel Khan" />
                <meta name="robots" content="index,follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
            <section id="home" className="home-container">
                <div className="main-image-area"></div>
                <div className="banner-text">
                    <span className="banner-qandeel">QANDEEL</span>
                    <span className="banner-khan">KHAN</span>
                    <ChangingText />
                </div>
            </section>
        </>
    );
};

export default Home;
