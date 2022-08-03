import React, {useState, Fragment} from 'react';
import "./posts.css"
import {Avatar, Button, Input} from "@mui/material"
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
import { useGetBookmarksQuery } from '../../services/extendedApi';
import { useAddBookmarkMutation } from '../../services/extendedApi';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModalComponent from '../modal/DeleteModalComponent';
import EditModalComponent from '../modal/EditModalComponent';
import { useDispatch } from 'react-redux';
import { setAlert, removeAlert } from '../../features/auth/alertSlice';
import { nanoid } from '@reduxjs/toolkit';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import { useGetPostsByUsernameQuery } from '../../services/extendedApi';
import EditPost from './EditPost';

const PostCard = ({posts, editPost, setEditPost}) => {
    
    const id = nanoid();
    
    const dispatch = useDispatch();

    //get user
    const {_id:userId} = JSON.parse(localStorage.getItem("user"))
    const {data: userData} = useGetParticularUserQuery(userId);
    const currentUserId = userData?.user?._id
    const currentUsername = userData?.user?.username

    const {data : postByUser} = useGetPostsByUsernameQuery(userData?.user?.username);
    // console.log(postByUser)


    //get posts
    // const { data, error, isLoading, isSuccess } = useGetPostsQuery();
    // const userPosts = data?.posts
    // console.log(userPosts)

    //functionality to add a like to a post 
    const [addLike] = useAddLikeMutation();

    const addLikeHandler = async (postId) => {
       await addLike({postId})
    }

    //functionality to bookmark a post
    const [addBookmark] = useAddBookmarkMutation();
    // const [isBookmarked, setIsBookmarked] = useState(false)
    const addBookmarkHandler = async (postId) => {
       const {data, error, isLoading, isSuccess}= await addBookmark({postId})
       if (data) {
        console.log("bookmark api response", data)
           dispatch(setAlert("The post has been bookmarked", "success", id))
           setTimeout(()=> dispatch(removeAlert(id)), 5000)   
        } else if (error) {
           dispatch(setAlert(error.data.errors, "error", id))
           setTimeout(()=> dispatch(removeAlert(id)), 5000) 
        }
    }   

    const bookmarkData = useGetBookmarksQuery()?.data?.bookmarks
    // console.log(bookmarkData)

    // functionality to edit a post 

    // const editHandler = (id) => {
    //     <EditPost id={id}/>
    //     setEditPost(true)
    // }
    
    // const closeText = () => {
    //     setEditPost((prevState)=> !prevState)   
    // }

  return (
    <Fragment>
    { posts?.map(post=> (
            <div className='posts' key={post?._id} >
            <div className='posts-avatar'>
                <Avatar alt='user-display-pic' src='../images/adarsh-balika.jpg'/>
            </div>
            <div className='posts-body'> 
                <div className='posts-header p'>
                    <div className='posts-header-text'>
                        <div className='flex-row-align'>
                            <h4>{post.firstname}</h4>
                           <span className='posts-header-username'><h4>@{post.username}</h4></span>
                           {/* <span className='posts-header-timestamp'><h5>{post.createdAt}</h5></span> */}
                        </div>
                     {
                        post.username === currentUsername && 
                        <div className='flex-row'>

                            {/* <Button id='post-edit-icon' onClick = {()=>editHandler(post?._id)}><EditIcon fontSize='small'/></Button> */}
                            <EditModalComponent post={post} Icon={<EditIcon fontSize='small'/>} type={"success"} header={"Edit Your Post Below?"} cta={"Save Changes"} />
                            <DeleteModalComponent postId={post._id} Icon={<DeleteIcon/>} type={"error"} header={"Are You Sure?"} text={"This will permanently delete your post!"} cta={"Delete"} />
                        </div>
                     }
                    </div>
                        <div className='posts-description'>
                        <p>{post.content}</p>
                    </div>
                </div>
                {/* <img src='https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif' alt='gif'/> */}

                    <div className='posts-footer'> 
                    {
                        post.likes.likedBy.find((item)=> item._id === currentUserId)=== undefined? (
                                 <button id='post-like' onClick={()=>addLikeHandler(post._id)}>
                                <FavoriteBorderOutlinedIcon fontSize='small'/> <span>{post.likes.likeCount}</span>  
                                </button> 
                        ) : (
                            <button id='post-like' className='active-button'>
                               <FavoriteOutlinedIcon fontSize='small'/> <span>{post.likes.likeCount}</span>  
                               </button> 
                        )
                    }    

                <button onClick={()=> addBookmarkHandler(post._id)}>
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

export default PostCard