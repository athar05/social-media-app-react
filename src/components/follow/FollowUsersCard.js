import React, {Fragment} from 'react';
import { Avatar, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFollowUserMutation } from '../../services/extendedApi';
import RemoveIcon from '@mui/icons-material/Remove';
import { useUnfollowUserMutation } from '../../services/extendedApi';
import { setAlert, removeAlert } from '../../features/auth/alertSlice';
import { useGetPostsByUsernameQuery } from '../../services/extendedApi';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const FollowUsersCard = ({data, error, isLoading, isSuccess}) => {

  const id = nanoid();
  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem('user'))
  const currentUsername = userData.username


  const users = data?.users;
  const slicedUsers = users?.slice(0,5);

const [currentFollowers] = users? users.filter((user)=> user.username === currentUsername) : []
const followingArray = currentFollowers?.following


  const updatedUsers = users?.filter((user)=> user.username !== currentUsername);


  //functionality to follow a user

  const [followUser] = useFollowUserMutation();

  const addFollowerHandler = async (userId) => {
   const{data: userData, error} = await followUser(userId);
   if (userData) {
    console.log(`You are now following ${userData.followUser.firstName}`)
    dispatch(setAlert(`You are now following ${userData.followUser.firstName}`, "success", id))
    setTimeout(()=> dispatch(removeAlert(id), 5000))
   }

  }

  //functionality to unfollow a user

  const [unfollowUser] = useUnfollowUserMutation();

  const removeFollowerHandler = async (userId) => {
    const{data:userData, error} = await unfollowUser(userId);
    if (userData) {
      console.log(`You unfollowed ${userData.followUser.firstName}`)
      dispatch(setAlert(`You unfollowed ${userData.followUser.firstName}`, "success", id))
      setTimeout(()=> dispatch(removeAlert(id), 5000))
     }
   }

  return (
    <Fragment>
      {
      isLoading && <h5 className='text-center p'>Loading users...</h5>
      }
      {
        error && <h5 className='text-center p'>Error in loading users....</h5>
      }
      {
        isSuccess && users.length<=5 ? 
        (
          updatedUsers?.map((user)=> (
            <div className='follow-users-card p' key={user._id}>
            <div className='follow-users-card-users'>
            <div>
            <Avatar/>
            </div>
            <div className='follow-users-card-user-info'>
                <h4>{user.firstName}</h4>
                <h6>@{user.username}</h6>
            </div>
            </div>
            <div className='follow-users-card-button'>
              {
                (followingArray?.find((follower) => follower._id === user._id) === undefined)? (
                  <Button variant='outlined' onClick ={()=> addFollowerHandler(user._id) }><AddIcon fontSize='small'/>Follow</Button>
                ) : (
                   <Button variant='outlined' onClick ={()=> removeFollowerHandler(user._id) }><RemoveIcon fontSize='small'/>Unfollow</Button>
                )
              }
            </div>
        </div>
        ))) :
        (
          slicedUsers?.map((user)=> (
            <div className='follow-users-card p' key={user._id}>
            <div className='follow-users-card-users'>
            <div>
            <Avatar/>
            </div>
            <div className='follow-users-card-user-info'>
                <h4>{user.firstName}</h4>
                <h6>{user.username}</h6>
            </div>
            </div>
            <div className='follow-users-card-button'>
            <Button variant='outlined'><AddIcon/> Follow</Button>
            </div>
        </div>
        )
        ))
      }
      {
        !users && <h5 className='text-center p'>No users available</h5>
      }
    </Fragment>
  )
}

export default FollowUsersCard