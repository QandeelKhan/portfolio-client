"use client";
import React from "react";

interface RemainingGoogleFormProps {
    firstName: String;
    lastName: string;
    accepted: boolean;

    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleAccepted: any;
}

const RemainingGoogleForm: React.FC<RemainingGoogleFormProps> = ({
    firstName,
    lastName,
    accepted,
    handleSubmit,
    handleAccepted,
}) => {
    const [isAccepted, setAccepted] = React.useState(accepted);

    const handleCheckboxChange = () => {
        setAccepted(!isAccepted);
        handleAccepted(!isAccepted);
    };

    return (
        <>
            <form id="registration-form" onSubmit={handleSubmit}>
                <h2>
                    Welcome `${firstName} {lastName}`, Please make sure to
                    accept the terms and conditions to finish your account
                    creation process.
                </h2>

                <div>Please accept the terms and conditions</div>

                <input
                    type="checkbox"
                    checked={isAccepted}
                    onChange={handleCheckboxChange}
                />
                <button
                    style={{
                        opacity: isAccepted ? 1 : 0.5,
                        cursor: isAccepted ? "pointer" : "not-allowed",
                    }}
                    disabled={!isAccepted}
                >
                    I Accept
                </button>
            </form>
        </>
    );
};

export default RemainingGoogleForm;
