import React, {Fragment} from 'react';
import { useGetParticularUserQuery, useRemoveBookmarkMutation } from '../../services/extendedApi';
import "./posts.css"
import { Avatar } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined'
import AddComment from "./AddComment"
import UserComments from "./UserComments"
import { useAddLikeMutation } from '../../services/extendedApi';
import { useDispatch } from 'react-redux/es/exports';
import { nanoid } from '@reduxjs/toolkit';
import { setAlert, removeAlert } from '../../features/slices/alertSlice';

const BookmarkedPosts = ({posts}) => {
    console.log(posts)

    const dispatch = useDispatch()
    const id=nanoid();

        //get user
        const {_id:userId} = JSON.parse(localStorage.getItem("user"))
        const {data: userData} = useGetParticularUserQuery(userId);


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
        {posts?.length === 0 && <h3 className='text-centre p m'>No Bookmarks Available</h3> }
            { posts?.map(post=>(
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
                    </div>
                        <div className='posts-description'>
                        <p>{post.content}</p>
                    </div>
                </div>

                    <div className='bookmarked-posts-footer'> 
                {posts?.find((item)=> item._id=== post._id) === undefined? ( 
                <button>
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

export default BookmarkedPosts