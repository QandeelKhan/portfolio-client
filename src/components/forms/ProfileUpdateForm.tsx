import { ChangeEvent, useState } from "react";
import { useUpdateUserProfileMutation } from "../../redux/services/userAuthApi";
import { useDispatch, useSelector } from "react-redux";
import {
    setFirstName,
    setLastName,
    setProfileImage,
} from "../../redux/features/authSlice";
import { RootState } from "../../redux/store";
import "./profile-update-form.css";

const ProfileUpdateForm = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [updateUserProfile, { isLoading, isSuccess, isError }] =
        useUpdateUserProfileMutation<any>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        // const selectedFile = e.target.files[0];
        const selectedFile = e.target.files ? e.target.files[0] : null;
        setFile(selectedFile);
        // setImagePreview(URL.createObjectURL(selectedFile));
        setImagePreview(
            selectedFile ? URL.createObjectURL(selectedFile) : null
        );
    };

    const {
        firstName,
        lastName,
        email,
        id,
        loggedIn,
        staffUser,
        profileImage,
    } = useSelector((state: RootState) => state.auth);

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFirstName(e.target.value));
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setLastName(e.target.value));
    };

    const dispatch = useDispatch();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        if (file) {
            formData.append("profile_image", file);
            dispatch(setProfileImage(imagePreview));
        }
        if (firstName) {
            formData.append("first_name", firstName);
        }
        if (lastName) {
            formData.append("last_name", lastName);
        }

        try {
            await updateUserProfile(formData);
            setErrorMessage(null); // Reset the error message if the update is successful
        } catch (error) {
            setErrorMessage("An error occurred while updating the profile."); // Set the error message if there is an error
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="profile-form">
            <div className="img-profile-box">
                <div className="update-profile-img-container">
                    {imagePreview ? (
                        <img src={imagePreview} alt="Selected profile" />
                    ) : (
                        <img src={`${profileImage}`} alt="Default profile" />
                    )}
                </div>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="choose-img"
                />
            </div>
            <div className="fname-profile">
                <label htmlFor="first-name-input">First Name:</label>
                <input
                    type="text"
                    id="first-name-input"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </div>
            <div className="lname-profile">
                <label htmlFor="last-name-input">Last Name:</label>
                <input
                    type="text"
                    id="last-name-input"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </div>
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
