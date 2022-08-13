import React from 'react';
import "./user-profile.css";
import { Avatar } from '@mui/material';
import {Button} from '@mui/material'
import EditProfileComponent from './EditProfileComponent';
import { useGetParticularUserQuery } from '../../services/extendedApi';

const UserProfileContainer = () => {

  const {_id:userId} = JSON.parse(localStorage.getItem("user"))
  const {data: userData} = useGetParticularUserQuery(userId);
  console.log(userData)
  const userFirstName = userData?.user?.firstName
  const userUsername = userData?.user?.username
  const userFollowers = userData?.user?.followers?.length
  const userFollowing = userData?.user?.following?.length 
  const userBio = userData?.user?.bio
  const userProfileUrl = userData?.user?.profileUrl

  return (
    <div className='user-profile-details m'>
        <h2>Profile</h2>
        <div>
          <div className='profile-pic'>
            <Avatar className='m'  sx={{ width: 70, height: 70   }}/>
            <Button variant='outlined' className='profile-button'>Update</Button>
          </div>
            <h3>{userFirstName}</h3>
            <h4>{userUsername}</h4>
            <h4>Followers: {userFollowers}</h4>
            <h4>Following: {userFollowing}</h4>
            <h4>Bio: {userBio}</h4>
            <h4>Profile URL: {userProfileUrl}</h4>
        </div>
        <EditProfileComponent/>
    </div>
  )
}

export default UserProfileContainer