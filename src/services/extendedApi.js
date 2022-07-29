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
    }),
    getUsers: builder.query({
        query: ()=> "/users",
        providesTags: ['USER']
    }) 
    })
})

export const {useGetPostsQuery, useGetCommentsQuery, useGetUsersQuery} = extendedApi;