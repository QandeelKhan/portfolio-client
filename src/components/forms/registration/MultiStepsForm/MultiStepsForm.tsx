// import React, { useCallback, useEffect, useState } from "react";
// import "../../form.css";
// import FormButton from "../FormButton";
// import {
//     ServerErrorResponseType,
//     RegistrationFormInputType,
//     multiStepsFormSchema,
//     stepOneSchema,
//     stepTwoSchema,
//     ServerErrorsType,
//     errorResponseSchema,
// } from "../types";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import "./progress-bar.css";
// import InputField from "../InputField";
// import { CheckboxWithError } from "../CheckBox";
// import useFormProgress from "./useProgress";
// import { ToastContainer, toast } from "react-toastify";

// const MultiStepsForm = () => {
//     const [formData, setFormData] = useState<RegistrationFormInputType>({
//         first_name: "",
//         last_name: "",
//         email: "",
//         password: "",
//         password2: "",
//         tc: "False",
//     });
//     const [previousStep, setPreviousStep] = useState(0);
//     const [currentStepIndex, setCurrentStepIndex] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const delta = currentStepIndex - previousStep;
//     const [isServerError, setIsServerError] = useState(false);
//     const [serverError, setServerError] =
//         useState<Partial<ServerErrorResponseType>>();

//     const [formErrors, setFormErrors] = useState<
//         Partial<Record<keyof RegistrationFormInputType, string[]>>
//     >({});

//     // Add state to keep track of the overall form validity
//     const [isValidStep, setIsValidStep] = useState(false);

//     const validateStepOne = () => {
//         const { first_name, last_name } = formData;
//         return (
//             stepOneSchema.safeParse({ first_name, last_name }).success &&
//             currentStepIndex === 0
//         );
//     };

//     const validateStepTwo = () => {
//         const { email, password, password2, tc } = formData;
//         console.log(formErrors.password2);
//         return (
//             stepTwoSchema.safeParse({
//                 email,
//                 password,
//                 password2,
//                 tc,
//             }).success && currentStepIndex === 1
//         );
//     };

//     const stepsValidation = () => {
//         const isStepOneValid = validateStepOne();
//         const isStepTwoValid = validateStepTwo();

//         const currentStepFields = steps[currentStepIndex].fields;

//         console.log("isStepOneValid:", isStepOneValid);
//         console.log("isStepTwoValid:", isStepTwoValid);

//         if (isStepOneValid || isStepTwoValid) {
//             setIsValidStep(true);
//             console.log("Validation successful");
//         } else {
//             setIsValidStep(false);
//             console.log(`Validation failed on step: ${currentStepIndex}`);
//         }
//     };

//     useEffect(() => {
//         stepsValidation();
//     }, [formData, currentStepIndex]);

//     // Define a function to validate the form data
//     const fullValidation = () => {
//         const result = multiStepsFormSchema.safeParse(formData);
//         if (result.success) {
//             return true;
//         } else {
//             setFormErrors(result.error.flatten().fieldErrors);
//             return false;
//         }
//     };

//     const currentStepIndexStopper = useCallback(() => {
//         setCurrentStepIndex(currentStepIndex - 1);
//     }, [currentStepIndex]);

//     const nextStepIndex = () => {
//         setCurrentStepIndex((step) => step + 1);
//     };

//     const next = async (e: any) => {
//         const fullValidated = fullValidation();
//         if (currentStepIndex < steps.length - 1) {
//             if (isValidStep) {
//                 if (submitStep) {
//                     console.log(
//                         "submit after full validation and go to last step form completion note"
//                     );
//                     if (fullValidated) {
//                         await submitHandler(e);
//                         console.log("full validated");
//                         if (isServerError) {
//                             currentStepIndexStopper();
//                             console.log("invalidated by server");
//                         }
//                     }
//                     if (!fullValidated) {
//                         console.log("not fully validated");
//                         currentStepIndexStopper();
//                     }
//                 }
//                 setPreviousStep(currentStepIndex);
//                 nextStepIndex();
//             }
//         }
//     };

//     const prev = () => {
//         if (currentStepIndex > 0) {
//             setPreviousStep(currentStepIndex);
//             setCurrentStepIndex((step) => step - 1);
//         }
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         const { name, value } = e.target;
//         setFormData((prev:any) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleCheckboxChange = (isChecked: boolean) => {
//         setFormData((prev:any) => ({
//             ...prev,
//             tc: isChecked ? "True" : "False",
//         }));
//         console.log(`parent---TC: ${isChecked ? "True" : "False"}`);
//     };

//     const steps = [
//         {
//             id: "Step 1",
//             index: 1,
//             title: "User Information",
//             fields: ["first_name", "last_name"],
//         },
//         {
//             id: "Step 2",
//             index: 2,
//             title: "Account Information",
//             fields: ["email", "password", "password2", "tc"],
//         },
//         { id: "Step 3", index: 3, title: "Terms" },
//     ];
//     const progress = useFormProgress({
//         currentStepIndex,
//         totalSteps: steps.length,
//     });

//     const isLastStep = currentStepIndex === steps.length - 1;
//     const isFirstStep = currentStepIndex === 0;
//     const submitStep = currentStepIndex === steps.length - 2;

//     useEffect(() => {
//         try {
//             const result = multiStepsFormSchema.safeParse(formData);
//             if (result.success) {
//                 setFormErrors({});
//             } else {
//                 // Get the error object from the result object
//                 const error = result.error;
//                 setFormErrors(error.flatten().fieldErrors);
//                 console.log(formErrors);
//             }
//         } catch (error) {
//             console.log(error);
//             setFormErrors({
//                 // genericError: ["Server error. Please try again later."],
//             });
//         }
//     }, [formData]);

//     const submitHandler = useCallback(
//         async (e: React.FormEvent<HTMLFormElement>) => {
//             e.preventDefault();

//             const formDataValidationResult =
//                 multiStepsFormSchema.safeParse(formData);

//             if (formDataValidationResult.success) {
//                 setFormErrors({});
//                 const validatedFormData = formDataValidationResult.data;
//                 setLoading(true);
//                 const registrationResponse = await signIn("register", {
//                     ...validatedFormData,
//                     // callbackUrl: "/clientportal",
//                     redirect: false,
//                 });
//                 setLoading(false);
//                 if (registrationResponse?.ok) {
//                     console.log(registrationResponse);
//                     setServerError({}); // Reset server errors
//                 } else if (registrationResponse?.error) {
//                     currentStepIndexStopper();
//                     setIsServerError(true);
//                     const serverErrorResponseObj: ServerErrorResponseType =
//                         JSON.parse(registrationResponse.error);
//                     const responseErrors = errorResponseSchema.safeParse(
//                         serverErrorResponseObj
//                     );
//                     if (responseErrors.success) {
//                         const validatedErrors = responseErrors.data;
//                         console.log("server validated errors...!");
//                         console.log(validatedErrors?.errors?.email);

//                         if (validatedErrors) {
//                             console.log(
//                                 "Setting Form Errors:",
//                                 validatedErrors?.errors?.email
//                             );
//                             toast.error(validatedErrors?.errors?.email);
//                             setFormErrors({
//                                 ...formErrors,
//                                 email: validatedErrors?.errors
//                                     ?.email as string[],
//                             });
//                             setServerError(validatedErrors);
//                         }
//                     } else {
//                         console.log("server errors validation failed...!");
//                         // console.error(`Parsing error: ${error}`);
//                     }
//                 }
//             } else {
//                 setFormErrors(
//                     formDataValidationResult.error.flatten().fieldErrors
//                 );
//             }
//         },
//         [formData, isServerError]
//     );

//     const { data: session, status } = useSession();
//     const router = useRouter();
//     if (session) {
//         router.push("/clientportal");
//     } else
//         return (
//             <>
//                 <form id="auth-form" onSubmit={submitHandler}>
//                     <ToastContainer />
//                     <div className="bar-container">
//                         <div className="progress-bar-container">
//                             {steps.map((step, index) => (
//                                 <div
//                                     key={step.title}
//                                     className={`round-steps ${
//                                         index <= currentStepIndex
//                                             ? "round-un-muted"
//                                             : "round-muted"
//                                     }`}
//                                 >
//                                     <span style={{ paddingBottom: "15%" }}>
//                                         {/* {index + 1} */}
//                                         {step.index}
//                                     </span>
//                                 </div>
//                             ))}
//                             <div
//                                 className="bar-fill-container"
//                                 style={{ width: `${progress}%` }}
//                             ></div>
//                         </div>
//                     </div>
//                     <div className="form-container mt-4 w-full">
//                         <div className="">
//                             {currentStepIndex === 0 && (
//                                 <>
//                                     <h2
//                                         style={{
//                                             textAlign: "center",
//                                             margin: 0,
//                                             color: "white",
//                                             fontWeight: "bold",
//                                         }}
//                                     >
//                                         User Details
//                                     </h2>
//                                     <div id="auth-form">
//                                         <InputField
//                                             autoFocus
//                                             inputType="text"
//                                             id="first_name"
//                                             label="First Name"
//                                             required
//                                             value={formData.first_name}
//                                             onChange={handleInputChange}
//                                             name="first_name"
//                                             error={formErrors.first_name}
//                                         />
//                                         <InputField
//                                             inputType="text"
//                                             id="last_name"
//                                             label="Last Name"
//                                             required
//                                             value={formData.last_name}
//                                             onChange={handleInputChange}
//                                             name="last_name"
//                                             error={formErrors.last_name}
//                                         />
//                                     </div>
//                                 </>
//                             )}
//                             {currentStepIndex === 1 && (
//                                 <>
//                                     <h2
//                                         style={{
//                                             textAlign: "center",
//                                             margin: 0,
//                                             color: "white",
//                                             fontWeight: "bold",
//                                         }}
//                                     >
//                                         Account Creation
//                                     </h2>
//                                     <div id="auth-form">
//                                         <InputField
//                                             label="Email"
//                                             autoFocus
//                                             inputType="email"
//                                             id="email"
//                                             name="email"
//                                             required
//                                             value={formData.email}
//                                             onChange={handleInputChange}
//                                             error={formErrors.email}
//                                         />
//                                         <InputField
//                                             label="Password"
//                                             inputType="password"
//                                             id="password"
//                                             name="password"
//                                             required
//                                             value={formData.password}
//                                             onChange={handleInputChange}
//                                             error={formErrors.password}
//                                         />
//                                         <InputField
//                                             label="Password Confirm"
//                                             inputType="password"
//                                             id="password2"
//                                             name="password2"
//                                             required
//                                             value={formData.password2}
//                                             onChange={handleInputChange}
//                                             error={formErrors.password2}
//                                         />
//                                         <CheckboxWithError
//                                             id="tc"
//                                             name="tc"
//                                             required
//                                             checked={formData.tc === "True"}
//                                             onChange={handleCheckboxChange}
//                                             label="I accept the terms and conditions"
//                                             error={formErrors.tc}
//                                         />
//                                     </div>
//                                 </>
//                             )}
//                             {currentStepIndex === 2 && (
//                                 <>
//                                     <h2 className="text-base font-semibold leading-7 text-gray-900">
//                                         Complete
//                                     </h2>
//                                     <p className="mt-1 text-sm leading-6 text-gray-600">
//                                         Thank you for your submission.
//                                     </p>
//                                 </>
//                             )}
//                         </div>
//                         {/* Navigation */}
//                         <div className="buttons-container">
//                             <FormButton
//                                 variant="MultiStepsForm"
//                                 type="button"
//                                 onClick={prev}
//                                 disabled={isFirstStep}
//                                 style={{
//                                     opacity:
//                                         isFirstStep || isLastStep ? 0.5 : 1,
//                                 }}
//                                 title="Back"
//                             />
//                             <FormButton
//                                 variant="MultiStepsForm"
//                                 type={isLastStep ? "submit" : "button"}
//                                 // type="button"
//                                 onClick={next}
//                                 disabled={isLastStep || loading}
//                                 loading={loading}
//                                 title={submitStep ? "Submit" : "Next"}
//                             />
//                         </div>
//                     </div>
//                 </form>
//             </>
//         );
// };

// export default MultiStepsForm;

export {};
