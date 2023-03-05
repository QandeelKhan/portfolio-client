import { useUpdateUserProfileMutation } from "../../redux/services/userAuthApi";
import { ChangeEvent, useState } from "react";
import { getToken } from "../../redux/services/localStorageService";
import "../css/profile-update-form.css";
import { useDispatch } from "react-redux";
import {
    setFirstName,
    setLastName,
    setProfileImage,
} from "../../redux/features/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProfileUpdateForm = () => {
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [body, setBody] = useState<any>("");

    const { access_token, refresh_token } = getToken();
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
        await updateUserProfile(formData);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                {imagePreview ? (
                    <img src={imagePreview} alt="Selected profile" />
                ) : (
                    <img src={`${profileImage}`} alt="Default profile" />
                )}
                <input type="file" onChange={handleFileChange} />
            </div>
            <div>
                <label htmlFor="first-name-input">First Name:</label>
                <input
                    type="text"
                    id="first-name-input"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </div>
            <div>
                <label htmlFor="last-name-input">Last Name:</label>
                <input
                    type="text"
                    id="last-name-input"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Profile"}
            </button>
            {isSuccess && <div>Profile updated successfully.</div>}
        </form>
    );
};

export default ProfileUpdateForm;
