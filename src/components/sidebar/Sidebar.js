import React from 'react';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button } from '@mui/material';
import "./sidebar.css"

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <SidebarOptions active Icon={HomeOutlinedIcon} text="Home" />
        <SidebarOptions Icon={ExploreOutlinedIcon} text="Explore" />
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOptions Icon={AccountCircleOutlinedIcon} text="Profile" />
        <Button className='sidebar-button' variant='outlined' fullWidth>Create Post</Button>
    </section>
  )
}

export default Sidebar