import { mockApiSlice } from "./mockApiSlice";

export const extendedApi = mockApiSlice.injectEndpoints({
    //for getting posts
    endpoints: (builder)=> ({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ['POST'],
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: "/posts",
                method: "POST", 
                body: {postData: post}
            }), 
            invalidatesTags: ['POST'],
        }),
         //for getting the comments
         getComments: builder.query({
        query: (postId)=> `/comments/${postId}`,
        providesTags: ['COMMENT'],
    }),
    //for adding a new comment to a post 
          addComment: builder.mutation({
            query: ({postId, commentData}) => ({
                url: `/comments/add/${postId}`,
                method: "POST", 
                body: {commentData}
            }), 
            invalidatesTags: ['COMMENT']}
    ),
    //for getting all the users
         getUsers: builder.query({
        query: ()=> "/users",
        providesTags: ['USER']
    }),
    //for getting a particular user 
    getParticularUser: builder.query({
        query: (userId) => ({
            url: `/users/${userId}`
        })
    }),
    //for adding a like to a post
    addLike: builder.mutation({
        query: ({postId}) => ({
            url: `/posts/like/${postId}`,
            method: "POST"
        }),
        invalidatesTags: ['POST'],
    })
    })
})

export const {useGetPostsQuery, useAddPostMutation, useGetCommentsQuery, useAddCommentMutation, useAddLikeMutation, useGetUsersQuery, useGetParticularUserQuery} = extendedApi;