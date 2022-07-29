import React from 'react';
import "./tweetbox.css"
import { Avatar, Input, Button } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';

const TweetBox = () => {
  return (
    <div className='tweet-box'>
        <form>
            <div className='tweet-box-input'>
                <Avatar src='../images/user.jpg'/>
                <textarea
                placeholder='Create a post...'
                type='text'
                maxLength="250"
                />
            </div>
            <div className='tweet-box-utilities'>
                <div className='tweet-box-utilities-left'>
                    <ImageOutlinedIcon/>
                    <EmojiEmotionsOutlinedIcon/>
                    <GifBoxOutlinedIcon/>
                </div>
            <Button variant='outlined' className='tweet-box-button'>Post</Button>
            </div>
        </form> 
    </div>
  )
}

export default TweetBox