import React, {Fragment, useState} from 'react';
import PostCard from './PostCard';
import { useGetPostsQuery } from '../../services/extendedApi';
import { CircularProgress } from '@mui/material';
import { Button } from '@mui/material';
import "../sort-posts/sortposts.css"
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';


const Post =  () => {
        //get posts
        const { data:poData, error, isLoading, isSuccess } = useGetPostsQuery();
        const userPosts = poData?.posts
        console.log(poData)

        const sortByLikes = (data)=> {
          console.log("hello");
      //  const newPosts= [...userPosts].sort((a,b)=> b?.likes?.likeCount - a?.likes?.likeCount)
        return console.log( [...poData.posts].sort((a,b)=> b?.likes?.likeCount - a?.likes?.likeCount))
        }

console.log(poData?.posts)

  return (
    <Fragment>
          <div className='sort-posts m p'>
        <h5>Sort By</h5>
        <div> 
        <Button variant='outlined' onClick ={()=>sortByLikes(poData?.posts)}><span><TrendingUpOutlinedIcon/></span>Trending</Button>
        </div>
        <div>
        <Button variant='outlined'><AutorenewOutlinedIcon/>Latest</Button>
        </div>
    </div>
            {
        isLoading && <div className='text-center'>
        <CircularProgress/>
        </div>
        }
        {
            error && <h2>There Was An Error Loading Data</h2>
        }
  {isSuccess &&
 <PostCard posts={poData.posts}/> }
    
    </Fragment>
  )
}

export default Post