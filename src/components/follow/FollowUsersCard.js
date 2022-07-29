import React from 'react';
import { Avatar, Button } from '@mui/material';

const FollowUsersCard = () => {
  return (
    <div className='follow-users-card p'>
        <div className='follow-users-card-users'>
        <div>
        <Avatar/>
        </div>
        <div className='follow-users-card-user-info'>
            <h4>Athar</h4>
            <h6>@athar05</h6>
        </div>
        </div>
        <div className='follow-users-card-button'>
        <Button variant='outlined'>+ Follow</Button>
        </div>
    </div>
  )
}

export default FollowUsersCard