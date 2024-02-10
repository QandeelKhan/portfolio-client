import React, { useCallback } from "react";
import { CheckboxWithError } from "../../CheckBox";
import InputField from "../../InputField";
import { RegistrationFormInputType } from "../../types";

type AccountFormProps = Partial<RegistrationFormInputType> & {
    setFormData: (
        updater: (prev: RegistrationFormInputType) => RegistrationFormInputType
    ) => void;
    formErrors: Partial<Record<keyof RegistrationFormInputType, string[]>>;
};

export const TermsAndConditionsForm = ({
    email,
    password,
    password2,
    tc,
    setFormData,
    formErrors,
}: AccountFormProps) => {
    const handleCheckboxChange = useCallback(
        (isChecked: boolean) => {
            setFormData((prev: any) => ({
                ...prev,
                tc: isChecked ? "True" : "False",
            }));
            console.log(`parent---TC: ${isChecked ? "True" : "False"}`);
        },
        [setFormData]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <h2
                style={{
                    textAlign: "center",
                    margin: 0,
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                Account Creation
            </h2>
            <div id="auth-form">
                <InputField
                    label="Email"
                    autoFocus
                    inputType="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleInputChange}
                    error={formErrors.email}
                />
                <InputField
                    label="Password"
                    inputType="password"
                    id="password"
                    name="password"
                    required
                    value={password!}
                    onChange={handleInputChange}
                    error={formErrors.password}
                />
                <InputField
                    label="Password Confirm"
                    inputType="password"
                    id="password2"
                    name="password2"
                    required
                    value={password2!}
                    onChange={handleInputChange}
                    error={formErrors.password2}
                />
                <CheckboxWithError
                    id="tc"
                    name="tc"
                    required
                    checked={tc === "True"}
                    onChange={handleCheckboxChange}
                    label="I accept the terms and conditions"
                    error={formErrors.tc}
                />
            </div>
        </>
    );
};
