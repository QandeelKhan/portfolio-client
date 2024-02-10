import React, { useCallback, useEffect, useState } from "react";
import "./check-box.css";
import FormFieldError from "./FormFieldError";

interface CheckboxProps {
    label?: string;
    name: string;
    id?: string;
    error?: string[];
    // shouldz
    // onChange?: (checked: boolean) => void;
    onChange?: (checked: boolean) => void;
    // onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked?: boolean;
    value?: string;
    defaultChecked?: boolean;
    tabIndex?: number;
    required?: boolean;
    htmlFor?: string;
    labelToolTip?: string;
    InputFieldToolTip?: string;
}

export const CheckboxWithError: React.FC<CheckboxProps> = ({
    label = "Hi, i'm checkbox",
    name = "checkbox",
    id,
    // defaultChecked = false,
    defaultChecked,
    checked: controlledChecked, // Use controlledChecked as the checked state
    onChange,
    error,
    value,
    tabIndex,
    required = true,
    htmlFor = id,
    labelToolTip,
    InputFieldToolTip = labelToolTip,
}) => {
    const [checked, setChecked] = useState(defaultChecked);

    // useEffect(() => {
    //     // Update the local state when the controlledChecked prop changes
    //     setChecked(controlledChecked);
    // }, [controlledChecked]);

    useEffect(() => {
        // Update the local state when the controlledChecked prop changes
        setChecked((prevChecked) => {
            // Only update if the prop value is different from the local state
            if (prevChecked !== controlledChecked) {
                return controlledChecked;
            }
            return prevChecked;
        });
    }, [controlledChecked]);

    const handleCheckboxChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setChecked((prevChecked) => {
                const isChecked = e.target.checked;
                onChange?.(isChecked);
                return isChecked;
            });
        },
        [onChange, setChecked]
    );
    // useEffect(() => {
    //     onChange?.(checked);
    // }, [onChange, checked]);

    // useEffect(() => {
    //     setChecked(defaultChecked);
    // }, [defaultChecked]);

    // useEffect(() => {
    //     onChange(checked); // Invoke the onChange callback whenever the checked state changes
    //     console.log(`child---TC: ${checked}`);
    // }, [onChange, checked]);

    // useEffect(() => {
    //     onChange?.(checked);
    // }, [onChange, checked]);

    // useEffect(() => {
    //     setChecked(defaultChecked);
    // }, [defaultChecked]);

    return (
        <div className="check-box-container">
            <div className="check-box">
                <input
                    className="check-box__input"
                    type="checkbox"
                    id={id || name}
                    name={name}
                    checked={checked || false}
                    onChange={handleCheckboxChange}
                    required={required}
                    value={value}
                    tabIndex={tabIndex}
                    title={InputFieldToolTip}
                />
                <label
                    htmlFor={htmlFor}
                    title={labelToolTip}
                    className="check-box__text"
                >
                    <span style={{ color: "var(--color-white-beta)" }}>
                        {label}
                    </span>
                </label>
            </div>
            <div
                style={{
                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {error && (
                    <FormFieldError error={error} />
                    // {error[0]}
                )}
            </div>
        </div>
    );
};
