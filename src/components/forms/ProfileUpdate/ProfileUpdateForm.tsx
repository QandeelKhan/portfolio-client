import { ChangeEvent, useEffect, useState } from "react";
import { useUpdateMyUserProfileMutation } from "../../../redux/features/userProfileApi";
import InputField from "../InputField";
import EasyCrop, { CropModel } from "./utility/EasyCrop";
import UploadIcon from "./UploadIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getToken } from "../../../redux/services/localStorageService";
import {
    setFirstName,
    setLastName,
    setProfileImage,
} from "../../../redux/features/authSlice";
import "./profile-update-form.css";

const ProfileUpdateForm = () => {
    const [showCropper, setShowCropper] = useState(false); // New state to control cropper visibility
    const [croppedImage, setCroppedImage] = useState<any | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const {
        firstName,
        lastName,
        email,
        id,
        loggedIn,
        staffUser,
        profileImage,
    } = useSelector((state: RootState) => state.auth);

    const [showCheck, setShowCheck] = useState(true);
    const dispatch = useDispatch();
    const { access_token, refresh_token } = getToken();

    const handleCheckClick = async () => {
        // setProfileImage(croppedImage);
        setCroppedImage(profileImage);
        if (croppedImage) {
            try {
                const response = await fetch(croppedImage);
                const blob = await response.blob();
                const file = new File([blob], "profile_image.jpg", {
                    type: "image/jpeg",
                });
                setFile(file);

                const formData = new FormData();
                formData.append("profile_image", file);

                // Save changes by updating the user profile
                const { access_token } = getToken();
                if (access_token) {
                    await updateUserProfile({
                        token: access_token,
                        formData: formData,
                    });
                    dispatch(setProfileImage(croppedImage));
                    setShowCropper(false);
                    setShowCheck(false);
                }
            } catch (error) {
                console.log("Error fetching or creating file:", error);
                setErrorMessage(
                    "An error occurred while updating the profile."
                );
            }
        } else {
            setShowCropper(false);
            setShowCheck(false);
        }
    };

    const handleShowCropper = () => {
        setShowCropper(!showCropper);
        if (showCropper) {
            setShowCheck(true);
        } else {
            setShowCheck(false);
        }
        // setProfileImage(croppedImage);
    };

    useEffect(() => {
        dispatch(setFirstName(firstName || ""));
        dispatch(setLastName(lastName || ""));
        dispatch(setProfileImage(setProfileImage || null));
    }, []);
    // setProfileImage("");

    const [updateUserProfile, { isLoading, isSuccess, isError }] =
        useUpdateMyUserProfileMutation<any>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        setFile(selectedFile);

        setProfileImage(
            selectedFile ? URL.createObjectURL(selectedFile) : null
        );
    };

    const handleNameChange = (
        e: ChangeEvent<HTMLInputElement>,
        setName: React.Dispatch<React.SetStateAction<string | undefined>>
    ) => {
        setName(e.target.value);
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        if (file) {
            formData.append("profile_image", file);
        }
        if (firstName) {
            formData.append("first_name", firstName);
        }
        if (lastName) {
            formData.append("last_name", lastName);
        }
        if (croppedImage) {
            try {
                const response = await fetch(croppedImage);
                const blob = await response.blob();
                console.log("Fetched Blob:", blob); // Log the fetched blob

                // Create a File object from the blob
                const file = new File([blob], "cropped_image.jpg", {
                    type: "image/jpeg",
                });

                formData.append("profile_image", file);

                setProfileImage(croppedImage);
            } catch (error) {
                console.log("Error fetching or creating file:", error);
            }
        }

        try {
            if (access_token) {
                await updateUserProfile({
                    token: access_token,
                    formData: formData,
                });
                dispatch(setProfileImage(profileImage || null));
            }
        } catch (error) {
            setErrorMessage("An error occurred while updating the profile.");
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="profile-form">
            <div className="img-profile-box">
                <div className="inset-0 flex items-center justify-center">
                    {profileImage == null || profileImage == "" ? (
                        ""
                    ) : (
                        <>
                            {showCropper ? (
                                <i
                                    className={`profile-icon fa fa-check ${
                                        showCropper ? "active" : ""
                                    }`}
                                    onClick={handleCheckClick}
                                />
                            ) : (
                                <i
                                    className={`profile-icon fa fa-crop ${
                                        showCropper ? "active" : ""
                                    }`}
                                    onClick={handleShowCropper}
                                />
                            )}
                        </>
                    )}
                </div>
                {/* rounded box for profile image */}
                <div className="update-profile-img-container">
                    <>
                        {showCropper && (
                            <CropModel
                                active={showCropper}
                                modelChildren={
                                    <EasyCrop
                                        image={profileImage || ""}
                                        // onSave={handleSave}
                                        // onCancel={handleCancel}
                                        onSave={(croppedImg: string) => {
                                            // Handle the cropped image
                                            setCroppedImage(croppedImg);
                                            // Additional logic if needed
                                        }}
                                        onCancel={() => {
                                            // Logic to handle cancellation
                                            setShowCropper(false);
                                        }}
                                    />
                                }
                            />
                        )}
                    </>
                    <div className="h-full w-full relative">
                        <img
                            src={`${
                                profileImage == null || profileImage == ""
                                    ? "/images/other/avatar-male.jpg"
                                    : profileImage
                            }`}
                            alt="Default profile"
                            height={200}
                            width={200}
                        />
                    </div>
                </div>
                <UploadIcon handleFileChange={handleFileChange} />
            </div>
            <InputField
                label="First Name:"
                name="First Name"
                onChange={(e) => handleNameChange(e, setFirstName)}
                value={firstName || ""}
                inputVariant="profile"
            />
            <InputField
                label="Last Name:"
                name="Last Name"
                onChange={(e) => handleNameChange(e, setLastName)}
                value={lastName || ""}
                inputVariant="profile"
            />
            <button
                type="submit"
                disabled={isLoading}
                className="update-profile-btn"
            >
                {isLoading ? "Updating..." : "Update Profile"}
            </button>
            {isSuccess && <div>Profile updated successfully.</div>}
            {isError && <div>{errorMessage}</div>}
        </form>
    );
};

export default ProfileUpdateForm;
