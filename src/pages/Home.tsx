import ChangingText from "../components/ChangingText";
import { Helmet } from "react-helmet";
import "./css/home.css";
import { useDispatch } from "react-redux";
import { getToken } from "../redux/services/localStorageService";
import { useGetLoggedUserQuery } from "../redux/services/userAuthApi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import {
    setEmail,
    setFirstName,
    setId,
    setLastName,
    setProfileImage,
    setStaffStatus,
} from "../redux/features/authSlice";
// import WhatsAppButton from "../components/WhatsAppButton";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Home = () => {
    const dispatch = useDispatch();

    // this hook gives data and some other features, this access_token will goto userAuthApi and we get response
    // data of server in our "data" property in hook, then we use "data" wherever in ui's.
    const { access_token, refresh_token } = getToken();

    console.log(`Bearer ${access_token}`);

    const { data, isSuccess } = useGetLoggedUserQuery<any>({
        access_token: access_token,
        refresh_token: refresh_token,
    });
    console.log("My user data", data);

    const { firstName, lastName, email, id, loggedIn, staffUser } = useSelector(
        (state: RootState) => state.auth
    );

    // storing user profile data in state
    useEffect(() => {
        if (data && isSuccess) {
            dispatch(setId(data.id));
            dispatch(setFirstName(data.first_name));
            dispatch(setLastName(data.last_name));
            dispatch(setEmail(data.email));
            dispatch(setProfileImage(data.profile_image));
            if (data.is_staff) {
                dispatch(setStaffStatus(data.is_staff));
            }
        }
    }, [data, isSuccess, dispatch]);
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
