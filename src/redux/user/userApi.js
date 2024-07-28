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
    endpoints:(builder)=>({
      registerUser: builder.mutation({
        query: (registerPayload) => ({
          url: `user/registration`,
          method: "POST",
          body: registerPayload
        }),
      })
    })
});

export const {useRegisterUserMutation}= userApi;