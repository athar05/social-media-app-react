import React, {Fragment} from 'react'
import "./posts.css";
import { Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModalComponent from '../modal/DeleteModalComponent';
import EditModalComponent from '../modal/EditModalComponent';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined'
import UserComments from './UserComments';
import AddComment from './AddComment';
import { useDispatch } from 'react-redux';
import { useAddLikeMutation } from '../../services/extendedApi';
import { useAddBookmarkMutation } from '../../services/extendedApi';
import { useRemoveBookmarkMutation } from '../../services/extendedApi';
import { setAlert, removeAlert } from '../../features/slices/alertSlice';

const LatestPostsCard = ({posts, currentUsername, currentUserId, bookmarks, id}) => {

  const dispatch =  useDispatch();

      //functionality to add a like to a post 
      const [addLike] = useAddLikeMutation();

      const addLikeHandler = async (postId) => {
         await addLike({postId})
      }
  
      //functionality to bookmark a post
      const [addBookmark] = useAddBookmarkMutation();
  
      const addBookmarkHandler = async (postId) => {
         const {data, error, isLoading, isSuccess}= await addBookmark({postId})
         if (data) {
             dispatch(setAlert("The post has been bookmarked", "success", id))
             setTimeout(()=> dispatch(removeAlert(id)), 5000)   
          } else if (error) {
             dispatch(setAlert(error.data.errors, "error", id))
             setTimeout(()=> dispatch(removeAlert(id)), 5000) 
          }
      }   
  
      //functionality to remove a post from bookmarks 
  
      const [removeBookmark] = useRemoveBookmarkMutation();
  
      const removeBookmarkHandler = async (postId) => {
          const {data, error, isLoading, isSuccess}= await removeBookmark({postId})
          console.log(data, error)
          if (data) {
                 dispatch(setAlert("The post has been removed from bookmarks", "success", id))
                 setTimeout(()=> dispatch(removeAlert(id)), 5000)   
              } else if (error) {
                 dispatch(setAlert(error.data.errors, "error", id))
                 setTimeout(()=> dispatch(removeAlert(id)), 5000) 
              }
      }

  return (
    <Fragment>

      {
        [...posts]?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))?.map((post)=> (
          <div className='posts' key={post?._id}>
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
                            <EditModalComponent post={post} Icon={<EditIcon fontSize='small'/>} type={"success"} header={"Edit Your Post Below"} cta={"Save"} />
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

                {bookmarks?.find((item)=> item._id=== post._id) === undefined? ( 
                <button onClick={()=> addBookmarkHandler(post._id)}>
                <BookmarkBorderOutlinedIcon  fontSize='small'/>
                </button>
                )
                : 
                ( 
                <button onClick={()=> removeBookmarkHandler(post._id)}>
                <BookmarkOutlinedIcon  fontSize='small'/>
                </button>
                )
                   }
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

export default LatestPostsCard