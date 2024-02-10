import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./css/FormButton.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | "default"
        | "profile"
        | "login"
        | "registration"
        | "MultiStepsForm";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    tabIndex?: number;
    title?: string;
    loading?: boolean;
}

const FormButton: React.FC<ButtonProps> = ({
    variant = "default",
    className,
    type = "button",
    disabled = false,
    tabIndex,
    title = "button",
    loading = false,
    ...props
}) => {
    return (
        <button
            className={clsx(
                styles["login-button"],
                styles[`login-button--${variant}`],
                className // Allow the parent to pass additional classes
            )}
            type={type}
            disabled={disabled}
            tabIndex={tabIndex}
            {...props}
        >
            <div className={clsx(styles["button-wrapper"])}>
                <div className={clsx(loading && styles["spinner"])} />
                <div
                    className={clsx(
                        styles["button-title"],
                        loading && styles["title-muted"]
                    )}
                >
                    {title}
                </div>
            </div>
        </button>
    );
};

export default FormButton;
