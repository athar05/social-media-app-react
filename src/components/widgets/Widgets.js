import React from 'react'
import "./widgets.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {TwitterTweetEmbed} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='widgets-input'  >
            <SearchOutlinedIcon/>
            <input placeholder='Search Other Users' type='text'/> 
        </div>
        <div className='widgets-container'> 
        <h3 className='text-center'>What's Happening?</h3>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        </div>

    </div>
  )
}

export default Widgets