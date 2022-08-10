import React, {Fragment, useState} from 'react';
import PostCard from './PostCard';
import { useGetPostsQuery } from '../../services/extendedApi';
import { CircularProgress } from '@mui/material';
import "../sort-posts/sortposts.css"
import { addAllPosts } from '../../features/slices/postsSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';



const Post =  () => {

  const dispatch = useDispatch();

        //get posts
        const { data:poData, error, isLoading, isSuccess } = useGetPostsQuery();
        const userPosts = poData?.posts
        dispatch(addAllPosts(userPosts))

       const allPosts = useSelector(state=> state.posts?.allPosts)

  return (
    <Fragment>
            {
        isLoading && <div className='text-center'>
        <CircularProgress/>
        </div>
        }
        {
            error && <h2>There Was An Error Loading Data</h2>
        }
  {isSuccess &&
 <PostCard posts={allPosts}/> }
    
    </Fragment>
  )
}

export default Post