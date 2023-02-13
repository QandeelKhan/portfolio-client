import React, { useState } from "react";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    acceptTerms: boolean;
}

const VerticalForm: React.FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        acceptTerms: false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormValues({
            ...formValues,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Perform form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password-confirm">Confirm Password:</label>
                <input
                    type="password"
                    id="password-confirm"
                    name="passwordConfirm"
                    value={formValues.passwordConfirm}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                    type="checkbox"
                    id="accept-terms"
                    name="acceptTerms"
                    checked={formValues.acceptTerms}
                    onChange={handleInputChange}
                />
                <label htmlFor="accept-terms">
                    Accept Terms and Conditions
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default VerticalForm;
