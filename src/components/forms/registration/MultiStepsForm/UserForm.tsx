import React from "react";
import InputField from "../../InputField";
import { RegistrationFormInputType } from "../../types";

type UserFormProps = Partial<RegistrationFormInputType> & {
    formData: Partial<RegistrationFormInputType>;
    formErrors: Partial<Record<keyof RegistrationFormInputType, string[]>>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UserForm = ({
    formData,
    formErrors,
    handleInputChange,
}: UserFormProps) => {
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
                User Details
            </h2>
            <InputField
                autoFocus
                inputType="text"
                id="first_name"
                label="First Name"
                required
                value={formData.first_name}
                onChange={handleInputChange}
                name="first_name"
                error={formErrors.first_name}
            />
            <InputField
                inputType="text"
                id="last_name"
                label="Last Name"
                required
                value={formData.last_name}
                onChange={handleInputChange}
                name="last_name"
                error={formErrors.last_name}
            />
        </div>
    );
};
