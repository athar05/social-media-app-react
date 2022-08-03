import { mockApiSlice } from "./mockApiSlice";

export const extendedApi = mockApiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        //for getting posts
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ['POST'],
        }),
        //for adding post
        addPost: builder.mutation({
            query: (post) => ({
                url: "/posts",
                method: "POST", 
                body: {postData: post}
            }), 
            invalidatesTags: ['POST'],
        }),
        //for deleting post
        deletePost: builder.mutation({
            query: ({postId})=> ({
                url: `/posts/${postId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['POST'],
        }),
        //for getting posts by username 
        getPostsByUsername: builder.query({
            query: (username) => `/posts/user/${username}`,
                method: 'GET',
                providesTags: ['POST'],
        }),
        //for getting a post by postId
        getPostsByPostId: builder.query({
            query: (postId) => `/posts/user/${postId}`,
                method: 'GET',
                providesTags: ['POST'],
        }),
        //for editing a post by a user
        editPost: builder.mutation({
            query: (post) => ({
                url: `/posts/edit/${post._id}`,
                method: 'POST', 
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
       //for getting a particular user \

           getParticularUser: builder.query({
        query: (userId) =>  `/users/${userId}`,
            providesTags: ['USER']
          }),
            //for adding a like to a post
         addLike: builder.mutation({
        query: ({postId}) => ({
            url: `/posts/like/${postId}`,
            method: "POST"
        }),
        invalidatesTags: ['POST'],
            }),
            //for getting all the bookmarked posts 
            getBookmarks: builder.query({
                query: ()=>  '/users/bookmark',
                    providesTags: ['USER'],
            }),
            //for bookmarking a post
            addBookmark: builder.mutation({
                query: ({postId}) => ({
                    url: `/users/bookmark/${postId}`,
                    method: "POST"
                }),
                invalidatesTags: ["USER"]
            }),
      })
})

export const {useGetPostsQuery,
             useAddPostMutation, 
             useGetCommentsQuery, 
             useGetPostsByUsernameQuery,
             useGetPostsByPostIdQuery,
             useEditPostMutation,
             useAddCommentMutation, 
             useAddLikeMutation, 
             useGetUsersQuery, 
             useGetParticularUserQuery, 
             useDeletePostMutation, 
             useGetBookmarksQuery, 
             useAddBookmarkMutation} = extendedApi;