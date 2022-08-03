import React, {Fragment} from 'react';
import { Avatar, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFollowUserMutation } from '../../services/extendedApi';
import { useUnfollowUserMutation } from '../../services/extendedApi';
import { useGetPostsByUsernameQuery } from '../../services/extendedApi';

const FollowUsersCard = ({data, error, isLoading, isSuccess}) => {

  const userData = JSON.parse(localStorage.getItem('user'))
  const currentUsername = userData.username
  console.log(currentUsername)

  const users = data?.users;
  const slicedUsers = users?.slice(0,5);
  console.log(users)

//   const getCurrentUserData = async (usersArr, username) => {
//     const {existingFollower} = await usersArr?.filter((user)=> user.username === username)
//     console.log(existingFollower) 
//  }
// console.log(getCurrentUserData(users, currentUsername)) 

  const {existingFollowers} = users?.filter((user)=> user.username === currentUsername)
console.log(existingFollowers)

  const updatedUsers = users?.filter((user)=> user.username !== currentUsername);

  console.log(updatedUsers)

  //functionality to add a follower 

  const [followUser] = useFollowUserMutation();

  const addFollowerHandler = async (userId) => {
   const{data, error} = await  followUser(userId);
   console.log(data, error)
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
                (existingFollowers.find((follower) => follower._id === user._id) === undefined)? (
                  <Button variant='outlined' onClick ={()=> addFollowerHandler(user._id) }><AddIcon fontSize='small'/>Follow</Button>
                ) : (
                   <Button variant='outlined' onClick ={()=> addFollowerHandler(user._id) }><AddIcon fontSize='small'/>Unfollow</Button>
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