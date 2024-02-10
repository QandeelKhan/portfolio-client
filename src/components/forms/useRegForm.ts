import { useState, useEffect, useCallback } from "react";
import { multiStepsFormSchema } from "./types";
import { useRegisterUserMutation } from "../../redux/services/userAuthApi";
import { storeToken } from "../../redux/services/localStorageService";
import { useNavigate } from "react-router-dom";
import { FormInputType } from "./playground";
import { ClientError } from "./types";

export const useRegForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState<FormInputType>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
        tc: "False",
    });
    const [formErrors, setFormErrors] = useState<
        Partial<Record<keyof ClientError, string[]>>
    >({});
    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const handleCheckboxChange = useCallback((isChecked: boolean) => {
        setFormData((prev: any) => ({
            ...prev,
            tc: isChecked ? "True" : "False",
        }));
        console.log(`parent---TC: ${isChecked ? "True" : "False"}`);
    }, []);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const {
                target: { name, value },
                ...rest
            } = e;
            e.preventDefault();
            setFormData((prev: any) => ({
                ...prev,
                [name]: value,
            }));
        },
        []
    );
    const navigate = useNavigate();

    const handleFormSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitted(true);
            try {
                const result = multiStepsFormSchema.safeParse(formData);

                if (result.success) {
                    const actualData = result.data;
                    console.log("Data to be sent to the backend:", actualData);
                    setFormErrors({});
                    const res: any = await registerUser(actualData);
                    if (res.error) {
                        setFormErrors(res.error.data.errors);
                    }
                    if (res.data) {
                        storeToken(res.data.token);
                        navigate("/");
                    }
                } else {
                    const error = result.error;
                    setFormErrors(error.flatten().fieldErrors);
                    console.log(formErrors.tc);
                }
            } catch (error) {
                console.error(error);
                setFormErrors({
                    genericError: ["Server error. Please try again later."],
                });
            }
        },
        [formData, registerUser]
    );

    useEffect(() => {
        try {
            const result = multiStepsFormSchema.safeParse(formData);

            if (result.success) {
                setFormErrors({});
            } else {
                const error = result.error;
                setFormErrors(error.flatten().fieldErrors);
            }
        } catch (error) {
            console.error(error);
            setFormErrors({
                genericError: ["Server error. Please try again later."],
            });
        }
    }, [formData]);

    return {
        submitted,
        formData,
        formErrors,
        isLoading,
        handleCheckboxChange,
        handleInputChange,
        handleFormSubmit,
    };
};

//
// import { useState, useEffect, useCallback } from "react";
// import { formSchema } from "./registration/types";
// import { useRegisterUserMutation } from "@/redux/services/userAuthApi";
// import { storeToken } from "@/redux/services/localStorageService";
// import { redirect } from "next/navigation";
// import { FormInputType } from "./playground";
// import { ClientError } from "./registration/types";

// export const useRegForm = (
//     initialFormData: FormInputType = {
//       first_name: "",
//       last_name: "",
//       email: "",
//       password: "",
//       password2: "",
//       tc: "False",
//     },
//     initialFormErrors: Partial<Record<keyof ClientError, string[]>> = {}
//   ) => {
//     const [submitted, setSubmitted] = useState(false);
//     const [formData, setFormData] = useState(initialFormData);
//     const [formErrors, setFormErrors] = useState(initialFormErrors);
//     const [registerUser, { isLoading }] = useRegisterUserMutation();

//     const { first_name, last_name, email, password, password2, tc } = formData;

//     const handleCheckboxChange = useCallback((isChecked: boolean) => {
//       setFormData((prev) => ({
//         ...prev,
//         tc: isChecked ? "True" : "False",
//       }));
//       console.log(`parent---TC: ${isChecked ? "True" : "False"}`);
//     }, []);

//     const handleInputChange = useCallback(
//       (e: React.ChangeEvent<HTMLInputElement>) => {
//         const {
//           target: { name, value },
//           ...rest
//         } = e;
//         e.preventDefault();
//         setFormData((prev) => ({
//           ...prev,
//           [name]: value,
//         }));
//       },
//       []
//     );

//     const handleFormSubmit = useCallback(
//       async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setSubmitted(true);
//         try {
//           const result = formSchema.safeParse(formData);

//           // Use ternary operators instead of if-else statements
//           result.success
//             ? handleSuccess(result.data)
//             : handleError(result.error);
//         } catch (error) {
//           console.error(error);
//           setFormErrors({
//             genericError: ["Server error. Please try again later."],
//           });
//         }
//       },
//       [first_name, last_name, email, password, password2, tc, registerUser]
//     );

//     // Extract the success and error handling logic into separate functions
//     const handleSuccess = (data:any) => {
//       console.log("Data to be sent to the backend:", data);
//       setFormErrors({});
//       registerUser(data)
//         .then((res) => {
//           res.data ? handleLogin(res.data) : handleError(res.error.data);
//         })
//         .catch((error) => {
//           console.error(error);
//           setFormErrors({
//             genericError: ["Server error. Please try again later."],
//           });
//         });
//     };

//     const handleError = (error) => {
//       setFormErrors(error.flatten().fieldErrors);
//       console.log(formErrors.tc);
//     };

//        const handleLogin = (data) => {
//       storeToken(data.token);
//       redirect("/");
//     };

//     useEffect(() => {
//       try {
//         const result = formSchema.safeParse(formData);

//         // Use ternary operators instead of if-else statements
//         result.success
//           ? setFormErrors({})
//           : setFormErrors(result.error.flatten().fieldErrors);
//       } catch (error) {
//         console.error(error);
//         setFormErrors({
//           genericError: ["Server error. Please try again later."],
//         });
//       }
//     }, [first_name, last_name, email, password, password2, tc]);

//     return {
//       submitted,
//       formData,
//       formErrors,
//       isLoading,
//       handleCheckboxChange,
//       handleInputChange,
//       handleFormSubmit,
//     };
//   };
