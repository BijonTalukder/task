import { createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";


export const axiosBaseQuery: BaseQueryFn<
  {
    url: string;
    method: string;
    data?: any;
    params?: any;
    contentType?: string;
  },
  unknown,
  unknown
> = async ({ url, method, data, params, contentType }) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      params,
      headers: {
        "Content-Type": contentType || "application/json",
      },
    });
    return { data: response.data };
  } catch (error) {
    const err = error as AxiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    productList: builder.query({
      query: (arg) => ({
        url: "https://reactjr.coderslab.online/api/products",
        method: "GET",
        params: arg,
      }),
    }),
    createProduct: builder.mutation({
      query: ({ data }) => ({
        url: "https://reactjr.coderslab.online/api/products",
        method: "POST",
        data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `https://reactjr.coderslab.online/api/products/${id}`,
        method: "DELETE",
      }),
    }),
    singleProduct: builder.query({
      query: (id) => ({
        url: `https://reactjr.coderslab.online/api/products/${id}`,
        method: "GET",
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `https://reactjr.coderslab.online/api/products/${id}`,
        method: "POST",
        data,
      }),
    }),
    createOrder: builder.mutation({
      query: ({ data }) => ({
        url: "https://reactjr.coderslab.online/api/orders",
        method: "POST",
        data,
      }),
    }),
    getOrder: builder.query({
      query: () => ({
        url: "https://reactjr.coderslab.online/api/orders",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUpdateProductMutation,
  useSingleProductQuery,
  useCreateProductMutation,
  useProductListQuery,
  useDeleteProductMutation,
} = baseApi;
