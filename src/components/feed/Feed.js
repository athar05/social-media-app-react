import React from 'react';
import "./feed.css";
import TweetBox from '../tweet-box/TweetBox';
import Posts from '../posts/Posts';
import SortPosts from '../SortPosts.js/SortPosts';

const Feed = () => {
  return (
    <div className='feed'>
      <TweetBox />
      <SortPosts/>
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