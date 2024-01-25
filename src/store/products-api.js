import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://iim.etherial.fr",
  }),
  endpoints(builder) {
    return {
      getProducts: builder.query({
        query: () => {
          return {
            url: "/products",
            method: "GET",
          };
        },
      }),
      getCommentsByProduct: builder.query({
        providesTags: (result, error, id) => {
          // console.log(id)
          return [{ type: "Comment", id: id }];
        },
        query: (id) => {
          return {
            url: `/products/${id}/comments`,
            method: "GET",
          };
        },
      }),
      createComment: builder.mutation({
        invalidatesTags: (result, error, arg) => {
          // console.log('arg: ', arg)
          return [{ type: "Comment", id: arg.id }];
        },
        query: ({ id, username, comment }) => {
          return {
            url: `products/${id}/comments`,
            method: "POST",
            body: { username, comment },
          };
        },
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useGetCommentsByProductQuery,
  useCreateCommentMutation,
} = productsApi;
export { productsApi };
