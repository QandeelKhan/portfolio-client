"use client";
import React, { useState, useCallback, useEffect } from "react";
import RegFormGoogle from "../google/RegFormGoogle";
import "../form.css";
import InputField from "../InputField";
import { LoginFormInputType, loginFormSchema } from "../types";
import { GoogleLoginButton } from "react-social-login-buttons";
import FormButton from "../FormButton";
import StyledLink from "../StyledLink";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../redux/services/userAuthApi";
import {
    getToken,
    storeToken,
} from "../../../redux/services/localStorageService";
import { setUserToken } from "../../../redux/features/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const [formData, setFormData] = useState<LoginFormInputType>({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginUser, { isLoading, isSuccess }] = useLoginUserMutation();

    const [formErrors, setFormErrors] = useState<
        Partial<Record<keyof LoginFormInputType, string[]>>
    >({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // Get the name and value of the input element
        const { name, value } = e.target;

        // For other input types, update the form data normally
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    useEffect(() => {
        try {
            const result = loginFormSchema.safeParse(formData);
            // If the data is valid, clear the form errors state
            if (result.success) {
                setFormErrors({});
            } else {
                // If the data is invalid, update the form errors state with the error messages
                // Get the error object from the result object
                const error = result.error;
                setFormErrors(error.flatten().fieldErrors);
            }
        } catch (error) {
            // If there is another error, log it and display a generic error message
            console.error(error);
        }
    }, [formData]);

    const handleFormSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            try {
                const formDataValidationResult =
                    loginFormSchema.safeParse(formData);

                if (formDataValidationResult.success) {
                    const actualData = formDataValidationResult.data;
                    setFormErrors({}); // Reset form errors

                    const loginResponse: any = await loginUser({
                        ...actualData,
                    });

                    if (loginResponse.data) {
                        storeToken(loginResponse.data.token);
                        let { access_token } = getToken();
                        dispatch(setUserToken({ access_token: access_token }));

                        navigate("/");
                    }

                    if (loginResponse?.error) {
                        try {
                            const errorObj = loginResponse.error.data.errors;
                            console.log(`Parsed error:`, errorObj.errors.email);
                            setFormErrors(errorObj.errors);
                        } catch (error) {
                            console.error(`Parsing error: ${error}`);
                        }
                    }
                } else {
                    setFormErrors(
                        formDataValidationResult.error.flatten().fieldErrors
                    );
                }
            } catch (error) {
                console.error(`Catch block errors: ${error}`);
            }
        },
        [formData]
    );

    if (isSuccess) {
        navigate("/clientportal");
    }
    return (
        <>
            <form id="auth-form" onSubmit={handleFormSubmit} noValidate>
                <InputField
                    value={formData.email}
                    onChange={handleInputChange}
                    label="Email"
                    name="email"
                    inputType="email"
                    tabIndex={3}
                    // error={serverError.email}
                    error={formErrors.email}
                />
                <InputField
                    value={formData.password}
                    onChange={handleInputChange}
                    label="Password"
                    name="password"
                    tabIndex={4}
                    error={formErrors.password}
                    inputType="password"
                    // error={serverError.password}
                />
                <FormButton
                    variant="login"
                    type="submit"
                    disabled={isLoading}
                    tabIndex={6}
                >
                    Login
                </FormButton>
                <StyledLink
                    href="/registration"
                    title="Click the link to create an account"
                    text="Do not have an account?"
                />
            </form>
            <div>
                <GoogleLoginButton text="Sign Up with Google" />
            </div>
        </>
    );
};

export default LoginForm;
// optimization: 105-->*
