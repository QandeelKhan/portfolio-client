import React, { useState, useCallback, useEffect } from "react";
import RegFormGoogle from "../RegFormGoogle";
// import CheckBox from "./CheckBox";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import { CheckboxWithError } from "../CheckBox";
import { RegistrationFormInputType, multiStepsFormSchema } from "../types";
import { useDispatch } from "react-redux";
import { setClientPortalClicked } from "../../../redux/reducers/eventsSlice";
import { FormInputType } from "../playground";
import StyledLink from "../StyledLink";
import FormButton from "../FormButton";
import { useRegisterUserMutation } from "../../../redux/services/userAuthApi";
import { storeToken } from "../../../redux/services/localStorageService";
import "../form.css";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false); // Track form submission
    // state variable to store the form data object
    const [formData, setFormData] = useState<RegistrationFormInputType>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
        tc: "False",
    });

    const [formErrors, setFormErrors] = useState<
        Partial<Record<keyof FormInputType, string[]>>
    >({});
    const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();
    const handleCheckboxChange = useCallback(
        (isChecked: boolean) => {
            setFormData((prev: any) => ({
                ...prev,
                tc: isChecked ? "True" : "False",
            }));
            console.log(`parent---TC: ${isChecked ? "True" : "False"}`);
        },
        [] // No dependencies, only create the callback once
    );
    useEffect(() => {
        console.log("updated tc:", formData.tc);
    }, [formData.tc]);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // Get the name and value of the input element
        const { name, value } = e.target;

        // For other input types, update the form data normally
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };
    // Use the useEffect hook to validate the form data on every change
    useEffect(() => {
        // Validate the form data with the Zod schema
        try {
            // Parse the form data safely
            const result = multiStepsFormSchema.safeParse(formData);

            // If the data is valid, clear the form errors state
            if (result.success) {
                setFormErrors({});
            } else {
                // If the data is invalid, update the form errors state with the error messages
                // Get the error object from the result object
                const error = result.error;
                // Pass the error.flatten().fieldErrors value to the setFormErrors function
                setFormErrors(error.flatten().fieldErrors);
            }
        } catch (error) {
            // If there is another error, log it and display a generic error message
            console.error(error);
            setFormErrors({
                // genericError: ["Server error. Please try again later."],
            });
        }
    }, [formData]);
    const dispatch = useDispatch();

    const handleFormSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitted(true);

            try {
                const formDataValidationResult =
                    multiStepsFormSchema.safeParse(formData);

                if (formDataValidationResult.success) {
                    const actualData = formDataValidationResult.data;
                    setFormErrors({}); // Reset form errors
                    const registrationResponse: any = await registerUser(
                        actualData
                    );
                    if (registrationResponse.data) {
                        console.log(typeof registrationResponse.data);
                        console.log(registrationResponse.data);
                        storeToken(registrationResponse.data.token);
                        navigate("/");
                    }

                    if (registrationResponse?.error) {
                        try {
                            const errorObj =
                                registrationResponse.error.data.errors;
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
        dispatch(setClientPortalClicked(true));
        navigate("/clientportal");
    }
    return (
        <>
            <form id="auth-form" onSubmit={handleFormSubmit} noValidate>
                {/* Separate input components for better maintainability */}
                {/* Create a separate Input component for each input field */}
                <InputField
                    value={formData.first_name}
                    onChange={handleInputChange}
                    label="First Name"
                    name="first_name"
                    inputType="text"
                    error={formErrors.first_name}
                    required={true}
                    tabIndex={1}
                    // error={serverError.first_name}
                />
                <InputField
                    value={formData.last_name}
                    onChange={handleInputChange}
                    label="Last Name"
                    name="last_name"
                    inputType="text"
                    error={formErrors.last_name}
                    tabIndex={2}
                    // error={serverError.last_name}
                />
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
                    inputType="password"
                    tabIndex={4}
                    error={formErrors.password}
                    // error={serverError.password}
                />

                <InputField
                    value={formData.password2}
                    onChange={handleInputChange}
                    label="Confirm Password"
                    name="password2"
                    inputType="password"
                    tabIndex={5}
                    // error={serverError.password2}
                    error={formErrors.password2}
                />

                {/* Terms and Conditions checkbox */}
                <CheckboxWithError
                    label="I accept the terms and conditions"
                    name="tc"
                    checked={formData.tc === "True"}
                    onChange={handleCheckboxChange}
                    value={formData.tc}
                    error={
                        submitted && formData.tc !== "True"
                            ? ["You must accept the terms and conditions."]
                            : undefined
                    }
                    // error={serverError.tc}
                />
                <FormButton
                    variant="registration"
                    type="submit"
                    // disabled={status === "loading"}
                    disabled={isLoading}
                    tabIndex={6}
                >
                    Register
                </FormButton>
                <StyledLink
                    href="/login"
                    title="Click the link to sign in"
                    text="Already have an account?"
                />
            </form>

            {/* <RegFormGoogle text="sign up with google" /> */}
        </>
    );
};

export default RegistrationForm;
// optimization: 290-->223
// const {
//     submitted,
//     formData,
//     formErrors,
//     isLoading,
//     handleCheckboxChange,
//     handleInputChange,
//     handleFormSubmit,
// } = useRegForm();
//
