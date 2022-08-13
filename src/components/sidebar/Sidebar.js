import React, { Fragment } from 'react';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import "./sidebar.css"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const clickHandler = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <Fragment>
    <section className='sidebar'>
       <NavLink to="/home" className={isActive => (isActive ? "sidebar-option-active" : "")}> <SidebarOptions Icon={HomeOutlinedIcon} text="Home" /> </NavLink> 
       <NavLink to="/explore" className={isActive => (isActive ? "sidebar-option-active" : "")}> <SidebarOptions Icon={ExploreOutlinedIcon} text="Explore" /></NavLink> 
       <NavLink to="/bookmark" className={isActive => (isActive ? "sidebar-option-active" : "")}> <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" /></NavLink> 
       <NavLink to="/profile" className={isActive => (isActive ? "sidebar-option-active" : "")}>  <SidebarOptions Icon={AccountCircleOutlinedIcon} text="Profile" /></NavLink> 
       <Button className='sidebar-button' variant='outlined' fullWidth onClick={clickHandler}><CreateIcon/><div className="text">Create Post</div></Button>
    </section>
    </Fragment>
  )
}

export default Sidebar