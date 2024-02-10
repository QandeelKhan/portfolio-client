"use client";
import React, { BaseSyntheticEvent, useState } from "react";
// import { useHistory } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
// import { LoginSocialGoogle } from "reactjs-social-login";
import { useDispatch, useSelector } from "react-redux";
import {
    setEmail,
    setFirstName,
    setLastName,
    setProviderName,
    setUserToken,
} from "../../../redux/features/authSlice";
import { useRegisterUserMutation } from "../../../redux/services/userAuthApi";
import { RootState } from "../../../redux/store";
import RemainingGoogleForm from "./RemainingGoogleForm";

type RegFormGoogleProps = {
    text?: string;
};
const RegFormGoogle: React.FC<RegFormGoogleProps> = ({ text }) => {
    const [termsAndConditions, setTermsAndConditions] = React.useState(false);
    const { firstName, lastName, email, password, password2 } = useSelector(
        (state: RootState) => state.auth
    );
    const dispatch = useDispatch();

    // const [accessToken, setAccessToken] = React.useState("");
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const [verifiedGoogleUser, setVerifiedGoogleUser] = useState(false);
    // const history = useHistory();

    const handleResolve = ({ provider, data }: any) => {
        console.log(provider, data);
        console.log({ provider, data });
        if (data.email_verified === true) {
            setVerifiedGoogleUser(true);
            console.log(`${data} this is data object`);
            // just to print all key, values of the data object
            // for (const result in data) {
            //     console.log(`${result}: ${data[result]}`);
            // }
            const fullName = data.name;
            const nameArray = fullName.split(" ");
            const firstName = nameArray[0];
            const lastName =
                nameArray.length > 1 ? nameArray[nameArray.length - 1] : "";
            console.log(`the full name is ${fullName}`);
            console.log(
                `first name is:${firstName}, $ last name is ${lastName}`
            );
            dispatch(setFirstName(firstName));
            dispatch(setLastName(lastName));
            dispatch(setEmail(data.email));
            dispatch(setProviderName(provider));
            dispatch(setUserToken(data.access_token));

            const profilePhoto = data.picture;
            const tokenExpirySeconds = data.expires_in;
            const tokenType = data.token_type;
            // setTermsAndConditions(true);
        }
    };

    const handleSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // this email can be target by the "name" property of html/jsx element.
        const actualData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password2: password2,
            // tc: termsAndConditions,
            tc: true,
        };

        // calling the "registerUser" by await and give it the data of frontend, this data will go to
        // the "userAuthApi" slice in the "user" obj we send to backend.
        // this res contain the response of server i.e error/success.
        const res: any = await registerUser(actualData);
        console.log(res);
        // here we define if the response of the server is "data" or the "error"
        // if (res.error) {
        // console.log(res.error.data.errors);
        // console.log(typeof res.error.data.errors);
        //     setServerError(res.error.data.errors);
        // }
        // if (res.data) {
        //     console.log(typeof res.data);
        //     console.log(res.data);
        //     storeToken(res.data.token);
        //     navigate("/dashboard");
        // }
    };

    const handleAccepted = (accepted: boolean) => {
        setTermsAndConditions(accepted);
    };

    return (
        <>
            {verifiedGoogleUser ? (
                <RemainingGoogleForm
                    handleSubmit={handleSubmit}
                    firstName={firstName}
                    lastName={lastName}
                    accepted={termsAndConditions}
                    handleAccepted={handleAccepted}
                />
            ) : (
                <div className="">
                    {/* <LoginSocialGoogle
                        client_id={
                            "1058064034426-n73ogv8ugd2086nqp2k451jmcoqgtgkd.apps.googleusercontent.com"
                        }
                        scope="openid profile email"
                        discoveryDocs="Claims_supported"
                        access_type="offlice"
                        onResolve={handleResolve}
                        onReject={(err) => {
                            console.log(err);
                        }}
                    > */}
                    <RegFormGoogle text="Sign Up with Google" />

                    {/* </LoginSocialGoogle> */}
                </div>
            )}
        </>
    );
};

export default RegFormGoogle;
