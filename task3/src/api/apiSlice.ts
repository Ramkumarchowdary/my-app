// src/api/apiSlice.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

interface Post {
  id: number;
  title: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({ url: "/posts", method: "GET" }),
    }),
    
  }),
});

export const { useGetPostsQuery } = apiSlice;
