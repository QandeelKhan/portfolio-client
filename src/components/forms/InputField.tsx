import React, { useState } from "react";
import clsx from "clsx";
import FormFieldError from "./FormFieldError";
import styles from "./css/input-field.module.css";

type Variant = "default" | "profile" | "login" | "register";
export type InputFieldProps = {
    label?: string;
    name?: string;
    id?: string;
    value: string | undefined;
    error?: string[];
    tabIndex?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
    inputVariant?: Variant;
    errorVariant?: Variant;
    inputType?: "text" | "email" | "password";
    autoFocus?: boolean;
    htmlFor?: string;
    labelToolTip?: string;
    InputFieldToolTip?: string;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    id,
    value,
    error,
    tabIndex,
    onChange,
    required = true,
    inputVariant = "default",
    errorVariant = "default",
    inputType: type = "text",
    autoFocus,
    htmlFor = id,
    labelToolTip,
    InputFieldToolTip = labelToolTip,
}) => {
    const [isBlurred, setIsBlurred] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true); // Track if the field is empty
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleBlur = () => {
        setIsBlurred(true);
    };

    const handleFocus = () => {
        setIsBlurred(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setIsEmpty(inputValue.trim() === ""); // Check if input is empty
        if (onChange) {
            onChange(e); // Propagate the change event
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <div
            className={clsx(
                styles["form-input"],
                styles[`form-input--${inputVariant}`]
            )}
        >
            <label
                title={labelToolTip}
                className={clsx(
                    styles["form-input__label"],
                    styles[`form-input__label--${inputVariant}`]
                )}
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <div className={clsx(styles["form-input__relative"])}>
                <input
                    className={clsx(
                        styles["form-input__input"],
                        styles[`form-input__input--${inputVariant}`]
                    )}
                    type={isPasswordVisible ? "text" : type}
                    id={id || name}
                    name={name}
                    required={required}
                    value={value}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    tabIndex={tabIndex}
                    // this changed
                    autoFocus={autoFocus}
                    title={InputFieldToolTip}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className={styles["button__show-hide-password"]}
                        onClick={togglePasswordVisibility}
                    >
                        <i
                            className={
                                isPasswordVisible
                                    ? "fa fa-eye-slash"
                                    : "fa fa-eye"
                            }
                        />
                    </button>
                )}
            </div>
            {error && isBlurred && !isEmpty && (
                <FormFieldError variant={errorVariant} error={error} />
            )}
        </div>
    );
};

export default InputField;
