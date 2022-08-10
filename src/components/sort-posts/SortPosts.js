import { Button } from '@mui/material';
import React from 'react';
import "./sortposts.css";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import { useGetPostsQuery } from '../../services/extendedApi';

const SortPosts = () => {

const {data, error, isLoading, isSuccess}= useGetPostsQuery();
const currPosts = data?.posts

const sortByLikes = () => {
  return null
}
  console.log(currPosts)

  return (
    <div className='sort-posts m p'>
        <h5>Sort By</h5>
        <div> 
        <Button variant='outlined' onClick ={()=>sortByLikes(currPosts)}><span><TrendingUpOutlinedIcon/></span>Trending</Button>
        </div>
        <div>
        <Button variant='outlined'><AutorenewOutlinedIcon/>Latest</Button>
        </div>
    </div>
  )
}

export default SortPosts