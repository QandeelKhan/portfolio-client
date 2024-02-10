import React from "react";
import clsx from "clsx";
import styles from "./css/form-field-error.module.css";

type Variant = "default" | "profile" | "login" | "register";

type InputFieldProps = {
    variant?: Variant;
    error?: string[];
};
const FormFieldError: React.FC<InputFieldProps> = ({ error, variant }) => {
    const errorClass = clsx(styles["form-input__error"], {
        [styles[`form-input__error--${variant}`]]: variant,
    });

    return (
        <div className="relative">
            <div className={errorClass}>{error}</div>
        </div>
    );
};

export default FormFieldError;
