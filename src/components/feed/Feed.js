import React from 'react';
import "./feed.css";
import TweetBox from '../tweet-box/TweetBox';

const Feed = () => {
  return (
    <div className='feed'>
      <h2>Feed</h2>
      <TweetBox />
    </div>
  )
}

export default Feed