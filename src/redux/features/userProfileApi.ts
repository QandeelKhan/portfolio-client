import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Backend_URL = "http://127.0.0.1:8000";
// Define the API slice
export const customUserApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: Backend_URL }),
    endpoints: (builder) => ({
        updateMyUserProfile: builder.mutation({
            // Use an object as the argument for the query function
            query: ({ token, formData }) => ({
                url: "/api/user/profile/",
                method: "PATCH",
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
    }),
});

// Export the hook for the mutation endpoint
export const { useUpdateMyUserProfileMutation } = customUserApi;
