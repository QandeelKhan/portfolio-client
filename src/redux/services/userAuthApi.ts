// Need to use the React-specific entry point to import createApi
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
// import { setUserToken, unSetUserToken } from "../features/authSlice";
import { userAuthApiExtended } from "./userAuthApiExtended";
import { getToken, removeToken, storeToken } from "./localStorageService";
import { setSelectedPost } from "../dataSlice";

export interface UpdatedUserProfileResponse {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    profile_image: string;
}

export interface UpdatedUserProfileRequest {
    first_name?: string;
    last_name?: string;
    email?: string;
    profile_image?: File;
}

// fetchBaseQuery: is fetch wrapper, automatically handle request headers and response parsing similar to axios.
const baseQuery = fetchBaseQuery({
    baseUrl: "https://our-resume-backend-azr8u.ondigitalocean.app/api/",
    // baseUrl: "http://127.0.0.1:8000/api/",
    prepareHeaders: (headers, { getState }) => {
        const { access_token } = getToken();
        if (access_token) {
            headers.set("authorization", `Bearer ${access_token}`);
        }
        return headers;
    },
});

export const userAuthApi = userAuthApiExtended.injectEndpoints({
    endpoints: (builder) => ({
        // consider below as the functions or actions of endpoints i.e
        // registerUser is the first action or function.
        // we use 'mutation' because we want to modify(update,delete,modify) our data and we
        // use "query" if we want to query the data(only want to get/read the data)
        registerUser: builder.mutation({
            // the data we want to send from our frontend to backend and we store that data in "user" named var and
            // then we send that to our backend api through api call
            query: (user) => {
                return {
                    // "url": send request to which url
                    url: "user/register/",
                    method: "POST",
                    // sending a "user" obj containing login/register fields data to the backend
                    body: user,
                    // if we want to pass headers as well,i.e application/json so in future we can pass token
                    headers: {
                        "content-type": "application/json",
                    },
                };
            },
        }),
        getLoggedUser: builder.query({
            query: (access_token) => {
                // console.log(access_token); : if we don't type below code in "return{}" statement then we cannot
                // be able to do i.e console.log(access_token) here. otherwise we can use it without "return" as well.
                return {
                    url: "user/profile/",
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${access_token}`,
                    },
                };
            },
        }),
        updateUserProfile: builder.mutation({
            query: ({ access_token, body }) => {
                return {
                    url: "user/profile/",
                    method: "PATCH",
                    headers: {
                        authorization: `Bearer ${access_token}`,
                    },
                    body,
                };
            },
        }),

        getLoggedUserOrders: builder.query({
            query: (access_token) => {
                // console.log(access_token); : if we don't type below code in "return{}" statement then we cannot
                // be able to do i.e console.log(access_token) here. otherwise we can use it without "return" as well.
                return {
                    url: "orders/",
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${access_token}`,
                    },
                };
            },
        }),
        loginUser: builder.mutation({
            // the data we want to send from our frontend to backend and we store that data in "user" named var and
            // then we send that to our backend api through api call
            query: (user) => {
                return {
                    url: "user/login/",
                    method: "POST",
                    // sending a "user" obj containing login/register fields data to the backend
                    body: user,
                    headers: {
                        "Content-type": "application/json",
                    },
                };
            },
        }),
        changeUserPassword: builder.mutation({
            query: ({ actualData, access_token }) => {
                return {
                    url: "user/changepassword/",
                    method: "POST",
                    body: actualData,
                    headers: {
                        authorization: `Bearer ${access_token}`,
                    },
                };
            },
        }),
        sendPasswordResetEmail: builder.mutation({
            query: (user) => {
                return {
                    url: "user/send-reset-password-email/",
                    method: "POST",
                    body: user,
                    headers: {
                        "Content-type": "application/json",
                    },
                };
            },
        }),
        resetPassword: builder.mutation({
            query: ({ actualData, id, token }) => {
                return {
                    url: `user/reset-password/${id}/${token}/`,
                    method: "POST",
                    body: actualData,
                    headers: {
                        "Content-type": "application/json",
                    },
                };
            },
        }),
        logoutUser: builder.mutation({
            query: (access_token) => {
                return {
                    url: `user/logout/`,
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${access_token}`,
                    },
                };
            },
        }),
        getBlogPosts: builder.query({
            query: (id) => {
                return {
                    url: "blog/blogposts/",
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                    },
                };
            },
        }),
        postingComments: builder.mutation({
            query: ({ access_token, postId, commentText }) => {
                return {
                    url: `blog/${postId}/comments`,
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        authorization: `Bearer ${access_token}`,
                    },
                    body: { text: commentText },
                };
            },
        }),

        // getBlogPosts: builder.query({
        //     query: (id) => {
        //         return {
        //             url: `blog/blogposts/`,
        //             method: "GET",
        //             headers: {
        //                 "Content-type": "application/json",
        //             },
        //         };
        //     },
        // }),
    }),
});

// -------- default structure of rtk query
// export const userAuthApi = createApi({
//     reducerPath: "userAuthApi",
//     baseQuery,
//     endpoints: (builder) => ({
//     }),
// });
// ........//

// --------

// Exporting auto-generated hooks for usage in functional components, which are
export const {
    usePostingCommentsMutation,
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetLoggedUserQuery,
    useGetLoggedUserOrdersQuery,
    useChangeUserPasswordMutation,
    useSendPasswordResetEmailMutation,
    useResetPasswordMutation,
    useLogoutUserMutation,
    useGetBlogPostsQuery,
    useUpdateUserProfileMutation,
} = userAuthApi;

// const refreshResult = await baseQuery(
//     {
//       url: '/refreshToken',
//       method: 'POST',
//       body: {
//         refreshToken: localStorage.getItem('refreshToken'),
//       },
//     },
//     api,
//     extraOptions
//   );

// ---------------- //

// export const baseApi = createApi({
//     reducerPath: 'baseApi',
//     baseQuery: baseQueryWithReauth,
//     endpoints: () => ({}),
// });
//
// export const yourApiName = userAuthApiExtended.injectEndpoints({
//     endpoints: (builder) => ({}),
// });
