import React from 'react';
import "./feed.css";
import TweetBox from '../tweet-box/TweetBox';
import Post from '../posts/Post';
import SortPosts from '../SortPosts.js/SortPosts';

const Feed = () => {
  return (
    <div className='feed'>
      <TweetBox />
      <SortPosts/>
      <Post/>
    </div>
  )
}

export default Feed