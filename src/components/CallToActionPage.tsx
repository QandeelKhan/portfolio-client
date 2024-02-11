import React, { useEffect } from "react";
import "./css/call-to-action.css";
import {
    setCallToActionPageOpen,
    setNavVisible,
} from "../redux/reducers/eventsSlice";
import { useDispatch } from "react-redux";

const CallToActionPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCallToActionPageOpen(true));
        dispatch(setNavVisible(false));

        return () => {
            dispatch(setCallToActionPageOpen(false));
            dispatch(setNavVisible(true));
        };
    }, [dispatch]);

    return (
        <div className="call-to-action-page">
            <h1>Order Now</h1>
            <p>
                Hi, I'm Qandeel Haider Khan, a Full Stack Python Django and
                React JavaScript Developer specializing in website and mobile
                application development. I have strong expertise in Django for
                building robust backends and React for creating dynamic
                frontends.
            </p>
            <p>
                If you are looking for professional web or mobile app
                development services, feel free to get in touch with me. I'm
                passionate about delivering high-quality solutions tailored to
                meet your specific requirements.
            </p>
            <p>You can contact me using the following methods:</p>
            <ul>
                <li>Email: qandeel@example.com</li>
                <li>Phone: +1234567890</li>
                <li>Website: www.qandeelkhan.com</li>
            </ul>
            <p>
                I look forward to discussing your project and working together!
            </p>
            <button className="order-button">Order Now</button>
        </div>
    );
};

export default CallToActionPage;
