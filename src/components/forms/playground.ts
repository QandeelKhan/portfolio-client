import { useState } from "react";
import { z } from "zod";

type ClientError = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password2: string;
    tc: string;
    genericError?: string;
};

// Define the form schema with Zod
const formSchema = z
    .object({
        first_name: z
            .string()
            .min(1, "First name is required")
            .max(55, "First name must be at most 55 characters"),
        last_name: z
            .string()
            .min(1, "Last name is required")
            .max(55, "Last name must be at most 55 characters"),
        // "{64}@{255}"/"64(local_part)+1(@symbol)+255(domain)=320": email international standard by "RFC 3696", but popular webs like google only allow 35 max chars for an email
        email: z
            .string()
            .email("Invalid email format")
            .trim()
            .min(10, "Email must be at least 10 characters")
            .max(70, "Email must be at most 70 characters"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(150, "Password must be at most 150 characters"),
        password2: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(150, "Password must be at most 150 characters"),
        tc: z.string().refine((val) => val === "on", {
            message: "Please accept the terms and conditions",
            path: ["tc"],
        }),
    }) // refine method to check if the password and password2 fields match
    .refine(
        (data) => data.password === data.password2, // return true if the fields match, false otherwise
        {
            message: "Passwords do not match", // the error message to display
            path: ["password2"], // the path of the field that caused the error
        }
    );

export type FormInputType = z.infer<typeof formSchema>;
// Create a state variable to store the form data object
const Playground = () => {
    const [formData, setFormData] = useState<FormInputType>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
        tc: "",
    });
    return formData;
};

export default Playground;
