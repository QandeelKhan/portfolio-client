import ChangingText from "../components/ChangingText";
import "./home.css";
import ThemeWrapper from "../components/ThemeWrapper";

const Home = () => {
    const text = ["Photographer", "Web Designer", "Software Developer"];

    return (
        <section id="home" className="home-container">
            <div className="main-image-area"></div>
            <div className="banner-text">
                <span className="banner-qandeel">QANDEEL</span>
                <span className="banner-khan">KHAN</span>
                <ChangingText text={text} />
                {/* <MyComponent /> */}
            </div>
        </section>
    );
};

export default Home;
