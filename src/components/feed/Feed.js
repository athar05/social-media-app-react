import React from 'react';
import "./feed.css";
import TweetBox from '../tweet-box/TweetBox';
import Posts from '../posts/Posts';

const Feed = () => {
  return (
    <div className='feed'>
      <TweetBox />
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </div>
  )
}

export default Feed