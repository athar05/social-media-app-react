import React, {Fragment} from 'react';
import { Avatar, Button } from '@mui/material';

const FollowUsersCard = ({data, error, isLoading, isSuccess}) => {
  const users = data?.users;
  const slicedUsers = users?.slice(0,5);
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
          users?.map((user)=> (
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
            <Button variant='outlined'>+ Follow</Button>
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
            <Button variant='outlined'>+ Follow</Button>
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