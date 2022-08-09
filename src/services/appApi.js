import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const appApi = createApi ({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body:"user",
            }),
        }),

        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body:"user"
            })
        })
    })
})

export const {
    userSignupMutation,
    useLoginMutation,
} = appApi

export default appApi;