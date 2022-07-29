import { mockApiSlice } from "./mockApiSlice";

export const extendedApi = mockApiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ['POST'],
        }),
         //for getting the comments
    getComments: builder.query({
        query: (postId)=> `/comments/${postId}`,
        providesTags: ['COMMENT'],
    })
    })
})

export const {useGetPostsQuery, useGetCommentsQuery} = extendedApi;