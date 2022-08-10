import React from 'react';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import "./sidebar.css"

const Sidebar = () => {

  const clickHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <section className='sidebar'>
        <SidebarOptions active Icon={HomeOutlinedIcon} text="Home" />
        <SidebarOptions Icon={ExploreOutlinedIcon} text="Explore" />
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOptions Icon={AccountCircleOutlinedIcon} text="Profile" />
        <Button className='sidebar-button' variant='outlined' fullWidth onClick={clickHandler}><CreateIcon/><div className="text">Create Post</div></Button>
    </section>
  )
}

export default Sidebar