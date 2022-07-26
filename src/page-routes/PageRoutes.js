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
import RequiresAuth from '../components/RequiresAuth';
import { useSelector } from 'react-redux';

const PageRoutes = () => {
  const loginState = useSelector((state)=> state.auth.isAuthenticated)
  return (
    <Routes>
    <Route exact path="/" element={<LandingPage />}/>
    <Route exact path="/home" element={<RequiresAuth login={loginState}><Home /></RequiresAuth>}/>
    <Route exact path="/explore" element={<RequiresAuth login={loginState}><Explore /> </RequiresAuth>}/>
    <Route exact path="/bookmark" element={<RequiresAuth login={loginState}><Bookmark /> </RequiresAuth>}/>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/signup" element={<Signup />}/>
    <Route exact path="/signout" element={<Signout />}/>
    <Route exact path="/profile" element={<RequiresAuth login={loginState}><UserProfile /> </RequiresAuth>}/>
    </Routes>
  )
}

export default PageRoutes