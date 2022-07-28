import { Button } from '@mui/material';
import React from 'react';
import "./sortposts.css";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
const SortPosts = () => {
  return (
    <div className='sort-posts m p'>
        <h5>Sort By</h5>
        <div>
        <Button variant='outlined'><span><TrendingUpOutlinedIcon/></span>Trending</Button>
        </div>
        <div>
        <Button variant='outlined'><AutorenewOutlinedIcon/>Latest</Button>
        </div>
    </div>
  )
}

export default SortPosts