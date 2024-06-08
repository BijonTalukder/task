import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { url } from "inspector";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reactjr.coderslab.online/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ data }) => ({
        url: "/login",
        method: "POST",
        data: data,
      }),
    }),
    productList: builder.query({
      query: (arg) => ({
        url: "/products",
        method: "GET",
        params: arg,
      }),
    }),
    registerUser: builder.mutation({
      query: ({ data }) => ({
        url: "/register",
        method: "POST",
        data: data,
      }),
    }),
    createProduct: builder.mutation({
      query: ({ data }) => ({
        url: "/create-product",
      }),
    }),
    deleteProduct: builder.mutation({
      query: ( id ) => ({
        url: `/products/${id}`,
        method: "DELETE",

      }),
    }),
  }),
});

export const { useLoginMutation,useRegisterUserMutation,useProductListQuery,useDeleteProductMutation } = baseApi;
