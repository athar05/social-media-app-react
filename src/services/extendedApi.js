import { mockApiSlice } from "./mockApiSlice";

export const extendedApi = mockApiSlice.injectEndpoints({
    //for getting posts
    endpoints: (builder)=> ({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ['POST'],
        }),
        createPost: builder.mutation({
            query: (post) => ({
                url: "/posts",
                method: "POST", 
                body: {postData: post}
            })
        }),
         //for getting the comments
    getComments: builder.query({
        query: (postId)=> `/comments/${postId}`,
        providesTags: ['COMMENT'],
    }),
    //for getting all the users
    getUsers: builder.query({
        query: ()=> "/users",
        providesTags: ['USER']
    }) 
    })
})

export const {useGetPostsQuery, useCreatePostMutation, useGetCommentsQuery, useGetUsersQuery} = extendedApi;