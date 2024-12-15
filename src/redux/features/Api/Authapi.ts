import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authapi = createApi({
  reducerPath: "auth",
  tagTypes: ["Auth"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (build) => ({
    signin: build.mutation({
      query: (body) => {
        return { url: "/users/login", method: "POST", body };
      },
    }),
    signup: build.mutation({
      query: (body) => {
        return { url: "/users/signup", method: "POST", body };
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authapi;
