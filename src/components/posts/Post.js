import React, {Fragment, useState} from 'react';
import PostCard from './PostCard';
import EditPost from './EditPost';
import { useGetPostsQuery } from '../../services/extendedApi';
import { CircularProgress } from '@mui/material';


const Post =  () => {
        //get posts
        const { data, error, isLoading, isSuccess } = useGetPostsQuery();
        const userPosts = data?.posts
        // console.log(userPosts)

        const [editPost, setEditPost] = useState(false)

        console.log(data?.posts)
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
  { !editPost && (<PostCard posts={userPosts} editPost={editPost} setEditPost={setEditPost}/>)}
    </Fragment>
  )
}

export default Post