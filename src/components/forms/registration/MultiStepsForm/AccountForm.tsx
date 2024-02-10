import React from "react";
import { CheckboxWithError } from "../CheckBox";
import InputField from "../InputField";
import { RegistrationFormInputType } from "../types";

type AccountFormProps = {
    formData: Partial<RegistrationFormInputType>;
    formErrors: Partial<Record<keyof RegistrationFormInputType, string[]>>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checkBoxChange?: ((checked: boolean) => void) | any;
    checked?: boolean;
    checkBoxLabel?: string;
};

export const AccountForm = ({
    checkBoxChange,
    handleInputChange,
    formData,
    formErrors,
    checked = false,
    checkBoxLabel: label,
}: AccountFormProps) => {
    return (
        <div id="auth-form">
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
            <InputField
                label="Email"
                autoFocus
                inputType="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                error={formErrors.email}
            />
            <InputField
                label="Password"
                inputType="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                error={formErrors.password}
            />
            <InputField
                label="Password Confirm"
                inputType="password"
                id="password2"
                name="password2"
                required
                value={formData.password2}
                onChange={handleInputChange}
                error={formErrors.password2}
            />
            <CheckboxWithError
                id="tc"
                name="tc"
                required
                checked={formData.tc === "True"}
                onChange={checkBoxChange}
                label={label || "I accept the terms and conditions"}
                error={formErrors.tc}
            />
        </div>
    );
};
