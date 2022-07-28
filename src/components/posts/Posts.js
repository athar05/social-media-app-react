import { Avatar } from '@mui/material';
import React from 'react';
import "./posts.css"
import UserComments from './UserComments';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import {Button} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Posts = () => {
  return (
    <div className='posts'>
        <div className='posts-avatar'>
            <Avatar/>
        </div>
        <div className='posts-body'> 
            <div className='posts-header p'>
                <div className='posts-header-text'>
                    <h4>Athar Shakeel</h4>
                 <span className='posts-header-username'><h4>@athar05 ▪</h4></span>
                 <span className='posts-header-timestamp'><h5>10s Ago</h5></span>
                </div>
                <div className='posts-description'>
                    <p>Helllooooooo I am in Dubai curretsssssssssssssssssssssssssssssssssss</p>
                </div>
            </div>
            <img src='https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif' alt='gif'/>
            <div className='posts-footer'> 
            <div id='post-like'>
            <FavoriteBorderOutlinedIcon fontSize='small'/> <span>58 </span>
            </div>
            <div>
            <BookmarkBorderOutlinedIcon  fontSize='small'/>
            </div>
            </div>
            <div className='add-comments'>
                <Avatar/>
                <input
                placeholder='Add comment'
                type= "text"
                />
                <Button><AddCircleIcon/></Button>
            </div>
            <div className='user-comments-body'>
                <UserComments/>
            </div>
        </div>
        
    </div>
  )
}

export default Posts