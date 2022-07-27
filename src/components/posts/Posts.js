import { Avatar } from '@mui/material';
import React from 'react';
import "./posts.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';


const Posts = () => {
  return (
    <div className='posts'>
        <div className='posts-avatar'>
            <Avatar/>
        </div>
        <div className='posts-body'> 
            <div className='posts-header'>
                <div className='posts-header-text'>
                    <h3>Athar Shakeel</h3>
                 <span className='posts-header-username'><h4>@athar05 ▪</h4></span>
                 <span className='posts-header-timestamp'><h4>10s Ago</h4></span>
                </div>
                <div className='posts-description'>
                    <p>Helllooooooo</p>
                </div>
            </div>
            <img src='https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif' alt='gif'/>
            <div className='posts-footer'> 
            <div>
            <ChatBubbleOutlineOutlinedIcon fontSize='small'/>
            </div>
            <div>
            <BookmarkBorderOutlinedIcon  fontSize='small'/>
            </div>
            <div>
            <FavoriteBorderOutlinedIcon fontSize='small'/>
            </div>
            <div>
            <ExpandMoreOutlinedIcon fontSize='small'/>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Posts