import React from 'react';
import {Routes, Route} from "react-router-dom"
import Bookmark from "../pages/Bookmark";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Signout from "../pages/Signout";
import Signup from "../pages/Signup";
import UserProfile from "../pages/UserProfile";

const PageRoutes = () => {
  return (
    <Routes>
    <Route exact path="/" element={<LandingPage />}/>
    <Route exact path="/home" element={<Home />}/>
    <Route exact path="/explore" element={<Explore />}/>
    <Route exact path="/bookmark" element={<Bookmark />}/>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/register" element={<Signup />}/>
    <Route exact path="/signout" element={<Signout />}/>
    <Route exact path="/profile" element={<UserProfile />}/>
    </Routes>
  )
}

export default PageRoutes