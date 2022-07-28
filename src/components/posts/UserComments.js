import React from 'react';
import { Avatar } from '@mui/material';

const UserComments = () => {
  return (
    <div className='user-comments m'>
        <div className='user-comments-details'> 
        <Avatar/>    
        </div>
        <div className='user-comments-description'>
            <h6>Athar Shakeel</h6>
            <p>Wow</p>
        </div>
    </div>
  )
}

export default UserComments