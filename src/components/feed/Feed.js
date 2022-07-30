import React from 'react';
import "./feed.css";
import CreatePost from '../create-post/CreatePost';
import Post from '../posts/Post';
import SortPosts from '../sort-posts/SortPosts';

const Feed = () => {
  return (
    <div className='feed'>
      <CreatePost />
      <SortPosts/>
      <Post/>
    </div>
  )
}

export default Feed