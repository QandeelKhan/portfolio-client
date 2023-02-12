import ChangingText from "../components/ChangingText";
import { Helmet } from "react-helmet";
import "./css/home.css";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Qandeel Haider Khan - Full Stack Developer | Python, Django,
                    React, javascript
                </title>
                <meta
                    name="description"
                    content="Welcome to the portfolio of Qandeel Khan, a Full Stack Developer specializing in Python, Django and React. Browse my projects, skills, and experience."
                />
                <meta
                    name="keywords"
                    content="Qandeel Haider Khan, Full Stack Developer, Python, Django, React, Portfolio, Projects, Skills, Experience, django and react developer, codewithmosh, django and react developer upwork, django and react developer fiver, front-end developer, django backend developer upwork, upwork python django,upwork react, upwork web development"
                />
                <meta name="author" content="Qandeel Haider Khan" />
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
