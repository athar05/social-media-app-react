import React, {useRef} from 'react';
import "./createpost.css"
import { Avatar, Input, Button } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import { useAddPostMutation } from '../../services/extendedApi';

const TweetBox = () => {

    const postTextInputRef = useRef();
    
    const [addPost] = useAddPostMutation();
    
    const submitHandler = async (e) => {
        let postText = postTextInputRef.current.value;
        e.preventDefault();
        console.log(postText)
        if (postText) {
            let newPost= {
                content: postText
            }
            
       await addPost(newPost)
       console.log(newPost)
        }
        clearFields();
    }

    const clearFields = () => {
        postTextInputRef.current.value=''
    }

  return (
    <div className='tweet-box'>
        <form onSubmit={submitHandler}>
            <div className='tweet-box-input'>
                <Avatar src='../images/user.jpg'/>
                <textarea
                placeholder='Create a post...'
                type='text'
                maxLength="200"
                ref={postTextInputRef}
                />
            </div>
            <div className='tweet-box-utilities'>
                <div className='tweet-box-utilities-left'>
                    <ImageOutlinedIcon/>
                    <EmojiEmotionsOutlinedIcon/>
                    <GifBoxOutlinedIcon/>
                </div>
            <Button type='submit' variant='outlined' className='tweet-box-button'>Post</Button>
            </div>
        </form> 
    </div>
  )
}

export default TweetBox