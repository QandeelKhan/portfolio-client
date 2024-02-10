// "use client";
// import { ChangeEvent, useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import { FormInput } from "../InputField";
// import { useUpdateMyUserProfileMutation } from "@/app/features/user/userProfileApi";
// import EasyCrop, { CropModel } from "@/app/(auth)/imagebox/utility/EasyCrop";

// export const ProfileUpdateForm = () => {
//     const [showCropper, setShowCropper] = useState(false); // New state to control cropper visibility
//     const [croppedImage, setCroppedImage] = useState<any | null>(null);
//     const { data: session } = useSession();
//     const [errorMessage, setErrorMessage] = useState<string | null>(null);
//     const [file, setFile] = useState<File | null>(null);
//     const [cropActive, setCropActive] = useState(false);
//     const [firstName, setFirstName] = useState<string | undefined>(
//         session?.user.first_name || ""
//     );
//     const [lastName, setLastName] = useState<string | undefined>(
//         session?.user.last_name || ""
//     );
//     const [profileImage, setProfileImage] = useState<string | null>(
//         session?.user.profile_image || null
//     );
//     const [showCheck, setShowCheck] = useState(true);

//     const handleCheckClick = async () => {
//         setProfileImage(croppedImage);
//         if (croppedImage) {
//             try {
//                 const response = await fetch(croppedImage);
//                 const blob = await response.blob();
//                 const file = new File([blob], "profile_image.jpg", {
//                     type: "image/jpeg",
//                 });
//                 setFile(file);

//                 const formData = new FormData();
//                 formData.append("profile_image", file);

//                 // Save changes by updating the user profile
//                 if (session) {
//                     await updateUserProfile({
//                         token: session.token.access,
//                         formData: formData,
//                     });
//                     setProfileImage(croppedImage);
//                     setShowCropper(false);
//                     setShowCheck(false);
//                 }
//             } catch (error) {
//                 console.log("Error fetching or creating file:", error);
//                 setErrorMessage(
//                     "An error occurred while updating the profile."
//                 );
//             }
//         } else {
//             setShowCropper(false);
//             setShowCheck(false);
//         }
//     };

//     const handleShowCropper = () => {
//         setShowCropper(!showCropper);
//         if (showCropper) {
//             setShowCheck(true);
//         } else {
//             setShowCheck(false);
//         }
//         // setProfileImage(croppedImage);
//     };

//     useEffect(() => {
//         setFirstName(session?.user.first_name || "");
//         setLastName(session?.user.last_name || "");
//         // setProfileImage(session?.user.profile_image || null);
//         setProfileImage("");
//     }, [session]);

//     const [updateUserProfile, { isLoading, isSuccess, isError }] =
//         useUpdateMyUserProfileMutation<any>();

//     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const selectedFile = e.target.files ? e.target.files[0] : null;
//         setFile(selectedFile);

//         setProfileImage(
//             selectedFile ? URL.createObjectURL(selectedFile) : null
//         );
//     };

//     const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setFirstName(e.target.value);
//     };
//     const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setLastName(e.target.value);
//     };

//     const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData();
//         if (file) {
//             formData.append("profile_image", file);
//         }
//         if (firstName) {
//             formData.append("first_name", firstName);
//         }
//         if (lastName) {
//             formData.append("last_name", lastName);
//         }
//         if (croppedImage) {
//             try {
//                 const response = await fetch(croppedImage);
//                 const blob = await response.blob();
//                 console.log("Fetched Blob:", blob); // Log the fetched blob

//                 // Create a File object from the blob
//                 const file = new File([blob], "cropped_image.jpg", {
//                     type: "image/jpeg",
//                 });

//                 formData.append("profile_image", file);

//                 setProfileImage(croppedImage);
//             } catch (error) {
//                 console.log("Error fetching or creating file:", error);
//             }
//         }

//         try {
//             if (session) {
//                 await updateUserProfile({
//                     token: session.token.access,
//                     formData: formData,
//                 });
//                 setProfileImage(session.user.profile_image || null);
//             }
//         } catch (error) {
//             setErrorMessage("An error occurred while updating the profile.");
//         }
//     };

//     return (
//         <form onSubmit={handleFormSubmit} className="profile-form">
//             <div className="img-profile-box">
//                 <div className="inset-0 flex items-center justify-center">
//                     {showCropper ? (
//                         <i
//                             className={`profile-icon fa fa-check ${
//                                 showCropper ? "active" : ""
//                             }`}
//                             onClick={handleCheckClick}
//                         />
//                     ) : (
//                         <i
//                             className={`profile-icon fa fa-crop ${
//                                 showCropper ? "active" : ""
//                             }`}
//                             onClick={handleShowCropper}
//                         />
//                     )}
//                 </div>
//                 {/* rounded box for profile image */}
//                 <div className="update-profile-img-container">
//                     <>
//                         {showCropper && (
//                             <CropModel
//                                 modelChildren={
//                                     <EasyCrop
//                                         image={profileImage || ""}
//                                         // onSave={handleSave}
//                                         // onCancel={handleCancel}
//                                         onSave={(croppedImg: string) => {
//                                             // Handle the cropped image
//                                             setCroppedImage(croppedImg);
//                                             // Additional logic if needed
//                                         }}
//                                         onCancel={() => {
//                                             // Logic to handle cancellation
//                                             setShowCropper(false);
//                                         }}
//                                     />
//                                 }
//                             />
//                         )}
//                     </>
//                     <div className="h-full w-full relative">
//                         <Image
//                             src={`${
//                                 profileImage == null || profileImage == ""
//                                     ? "/images/other/avatar-male.jpg"
//                                     : profileImage
//                             }`}
//                             alt="Default profile"
//                             height={200}
//                             width={200}
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <label
//                         htmlFor="file-input"
//                         className="profile-icon fa fa-image"
//                     >
//                         <input
//                             type="file"
//                             id="file-input"
//                             onChange={handleFileChange}
//                             className="choose-img"
//                             style={{
//                                 display: "none",
//                             }}
//                         />
//                     </label>
//                 </div>
//             </div>
//             <div className="fname-profile">
//                 <label htmlFor="first-name-input">First Name:</label>
//                 <input
//                     type="text"
//                     id="first-name-input"
//                     value={firstName || ""}
//                     onChange={handleFirstNameChange}
//                 />
//             </div>
//             <div className="lname-profile">
//                 <FormInput
//                     inputClass="-"
//                     className="-"
//                     label="Last Name"
//                     name="Last Name"
//                     onChange={handleLastNameChange}
//                     value={lastName || ""}
//                 />
//             </div>
//             <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="update-profile-btn"
//             >
//                 {isLoading ? "Updating..." : "Update Profile"}
//             </button>
//             {isSuccess && <div>Profile updated successfully.</div>}
//             {isError && <div>{errorMessage}</div>}
//         </form>
//     );
// };
export {};
