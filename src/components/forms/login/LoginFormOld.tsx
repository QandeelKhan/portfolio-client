import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../redux/services/userAuthApi";
import {
    getToken,
    storeToken,
} from "../../../redux/services/localStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../../redux/features/authSlice";
import RegFormGoogle from "../RegFormGoogle";
import "../login-form.css";

const LoginFormOld = () => {
    const [serverError, setServerError] = useState<any>({});
    const navigate = useNavigate();
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const dispatch = useDispatch();

    const handleSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const loginInput = {
            email: data.get("email"),
            password: data.get("password"),
        };
        const res: any = await loginUser(loginInput);
        console.log(res);
        if (res.error) {
            // console.log(res.error.data.errors);
            // console.log(typeof res.error.data.errors);
            setServerError(res.error.data.errors);
        }
        if (res.data) {
            // console.log(typeof res.data);
            // on login the token in response from server, in res.data.
            // we store response token using "LocalStorageService.ts" file
            console.log(res.data);
            // res.data.token give us obj of 2 tokens "access" and refresh
            storeToken(res.data.token);
            let { access_token } = getToken();
            dispatch(setUserToken({ access_token: access_token }));

            navigate("/");
        }
    };

    let { access_token } = getToken();
    useEffect(() => {
        dispatch(setUserToken({ access_token: access_token }));
    }, [access_token, dispatch]);

    return (
        <>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="login email">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                {serverError.email ? (
                    <div style={{ color: "red", paddingLeft: 10 }}>
                        {serverError.email[0]}
                    </div>
                ) : (
                    ""
                )}
                <div className="login password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                {serverError.password ? (
                    <div style={{ color: "red", paddingLeft: 10 }}>
                        {serverError.password[0]}
                    </div>
                ) : (
                    ""
                )}
                <button className="login-button" type="submit">
                    Login
                </button>
                <a style={{ color: "white" }} href="/registration">
                    Not a member?{" "}
                    <span style={{ color: "#00a3e1" }}>Create an account?</span>
                </a>
            </form>

            <RegFormGoogle />
        </>
    );
};

export default LoginFormOld;
