// Import Zod
import { z } from "zod";

// Baby schemas for each step
export const stepOneSchema = z.object({
    first_name: z
        .string()
        .min(2, "First name must be at least 2 character")
        .max(55, "First name must be at most 55 characters"),
    last_name: z
        .string()
        .min(2, "Last name must be at least 2 character")
        .max(55, "Last name must be at most 55 characters"),
});
export const stepTwoSchema = z
    .object({
        email: z
            .string()
            .email("Enter a valid email address")
            .max(150, "Email must be at most 150 characters!"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(150, "Password must be at most 150 characters"),
        password2: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(150, "Password must be at most 150 characters"),
        tc: z.string().refine((val: any) => val === "True", {
            message: "You must accept the terms and conditions",
            path: ["tc"],
        }),
    })

    .refine(
        (data: any) => data.password === data.password2, // return true if the fields match, false otherwise
        {
            message: "Passwords do not match", //error message to display
            path: ["password2"], // the path of the field that caused the error
        }
    );

// Use .merge() to merge the two object schemas
export const multiStepsFormSchema = stepOneSchema.merge(
    stepTwoSchema.innerType()
);
// >--------FOR ERROR AS SERVER RESPONSE---------<

export type RegistrationFormInputType = z.infer<typeof multiStepsFormSchema>;

export const errorResponseSchema = z.object({
    status: z.number().optional(), // Make the status property optional
    message: z.string().nullable(), // Make the message property nullable
    errors: z.record(z.union([z.string(), z.array(z.string())])).optional(), // Allow the errors values to be either strings or arrays of strings
});
export type ServerErrorResponseType = z.infer<typeof errorResponseSchema>;
export type ServerErrorsType = Record<string, string | string[]> | undefined;

export type ClientError = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password2: string;
    tc: string;
    genericError?: string;
};

export type ServerError = {
    first_name: string[];
    last_name: string[];
    email: string[];
    password: string[];
    password2: string[];
    tc: string[];
    genericError?: string[];
};

// >--------FOR LOGIN FORM---------<
export const loginFormSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(150, "Password must be at most 150 characters"),
});

export type LoginFormInputType = z.infer<typeof loginFormSchema>;

// >--------FOR TOKEN AS RESPONSE---------<
export const TokenResponseSchema = z.object({
    token: z.object({
        refresh: z.string(),
        access: z.string(),
        accessExpires: z.string(),
    }),
    msg: z.string(),
});
export type TokenResponseType = z.infer<typeof TokenResponseSchema>;

export const ServerResponseSchema = z.union([
    TokenResponseSchema, // The schema for the success case
    errorResponseSchema, // The schema for the error case
]);

// const formDataValidationResult = multiStepsFormSchema.safeParse(formData);

// if (formDataValidationResult.success) {
//   const actualData = formDataValidationResult.data;
//   setFormErrors({}); // Reset form errors
//   setLoading(true);
//   // Use the fetch function to send the validated form data to your API server
//   fetch("http://localhost:3000/registration", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(actualData),
//   })
//     // Use the json method to parse the response body
//     .then((res) => res.json())
//     // Use the then method to access the parsed data
//     .then((data) => {
//       // Use the union schema to parse the response data
//       const serverResponse = ServerResponseSchema.safeParse(data);
//       // Check if the response data is valid
//       if (serverResponse.success) {
//         // Do something with the valid data, such as storing the token or showing a message
//         console.log("Registration successful!");
//         console.log(serverResponse.data);
//       } else {
//         // Handle the invalid data, such as showing an alert or logging
//         console.error("Registration failed!");
//         console.error(serverResponse.error);
//       }
//     })
//     // Use the catch method to handle any rejected promise
//     .catch((error) => {
//       // Handle the error, such as showing an alert or logging
//       console.error("Registration error!");
//       console.error(error);
//     })
//     // Set the loading state to false
//     .finally(() => setLoading(false));
// }
