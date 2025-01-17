import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_BASE_URL}/`,
  prepareHeaders: (headers, { getState }) => {
    headers.set("X-Frame-Options", "SAMEORIGIN");
    headers.set("Cache-Control", "no-store");
    headers.set("Pragma", "no-cache");
    headers.set("X-Content-Type-Options", "nosniff");

    const headersObject = {};
    headers.forEach((value, name) => {
      headersObject[name] = value;
    });

    return headers;
  },
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (registerPayload) => ({
        url: `user/registration`,
        method: "POST",
        body: registerPayload,
      }),
    }),

    loginUser: builder.mutation({
      query: (loginPayload) => ({
        url: `user/login`,
        method: "POST",
        body: loginPayload,
      }),
    }),

    verifyUser: builder.mutation({
      query: (verifyPayload) => ({
        url: `user/token`,
        method: "POST",
        body: verifyPayload,
      }),
    }),

    verifyEmailForPasswordReset: builder.mutation({
      query: (verifyEmailPayload) => ({
        url: `user/password/reset/email`,
        method: "POST",
        body: verifyEmailPayload,
      }),
    }),

    resetPassword: builder.mutation({
      query: (resetPayload) => ({
        url: `user/password/reset`,
        method: "POST",
        body: resetPayload,
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        query: () => "users",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useVerifyUserMutation,
  useVerifyEmailForPasswordResetMutation,
  useResetPasswordMutation,
  useGetAllUsersQuery,
} = userApi;
