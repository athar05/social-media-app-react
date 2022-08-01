import React, {Fragment, useRef} from 'react';
import {Avatar} from "@mui/material"
import "./posts.css"
import UserComments from './UserComments';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined'
import { useGetPostsQuery } from '../../services/extendedApi';
import { CircularProgress } from "@mui/material";
import AddComment from './AddComment';
import { useAddLikeMutation } from '../../services/extendedApi';
import { useGetParticularUserQuery } from '../../services/extendedApi';


const Post =  () => {

    const {_id:userId} = JSON.parse(localStorage.getItem("user"))

    const {data: userData} = useGetParticularUserQuery(userId);
    const currentUserId = userData?.user?._id
    console.log(currentUserId)

    const { data, error, isLoading, isSuccess } = useGetPostsQuery();
    const userPosts = data?.posts
    // const likedUsers = data?.posts
     console.log(userPosts)
    // const {id, likes} = data?.posts;


    const [addLike] = useAddLikeMutation();

    //functionality to add a like to a post 

    const addLikeHandler = async (postId) => {
       await addLike({postId})
    //    setIsLike((prev)=> !prev)
    }

  return (
    <Fragment>
        {
        isLoading &&<div className='text-center'>
        <CircularProgress/>
        </div>
        }
        {
            error && <h2>There Was An Error Loading Data</h2>
        }
        { isSuccess &&
            userPosts?.map(post=> (
                <div className='posts' key={post?._id} >
                <div className='posts-avatar'>
                    <Avatar/>
                </div>
                <div className='posts-body'> 
                    <div className='posts-header p'>
                        <div className='posts-header-text'>
                            <h4>{post.firstname}</h4>
                         <span className='posts-header-username'><h4>@{post.username} ▪</h4></span>
                         <span className='posts-header-timestamp'><h5>{post.createdAt}</h5></span>
                        </div>
                        <div className='posts-description'>
                            <p>{post.content}</p>
                        </div>
                    </div>
                    {/* <img src='https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif' alt='gif'/> */}
                    <div className='posts-footer'> 
                    <button id='post-like' onClick={()=>addLikeHandler(post._id)}>
                        {
                            post.likes.likedBy.find((item)=> item._id === currentUserId)=== undefined? (
                                 <div>
                                    <FavoriteBorderOutlinedIcon fontSize='small' id='post-like'/> <span>{post.likes.likeCount}</span>  
                                 </div>
                            ) : (
                                <div>
                                   <FavoriteOutlinedIcon fontSize='small' id='post-like' className='active-button'/> <span>{post.likes.likeCount}</span>  
                                </div>
                            )
                        }    
                    </button> 
                    <button>
                    <BookmarkBorderOutlinedIcon  fontSize='small'/>
                    </button>
                    </div>
                    <div>
                        <AddComment id={post?._id}/>
                    </div>
                    <div className='user-comments-body'>
                        <UserComments id={post?._id}/>
                    </div>
                </div>
            </div>
            ))
        }
    </Fragment>
  )
}

export default Post