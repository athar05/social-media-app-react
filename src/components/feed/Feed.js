import React from 'react';
import "./feed.css";
import CreatePost from '../create-post/CreatePost';
import Post from '../posts/Post';
import Alerts from '../Alerts';

const Feed = () => {
  return (
    <div className='feed'>
      <CreatePost />
      <Alerts/>
      <Post/>
    </div>
  )
}

export default Feed