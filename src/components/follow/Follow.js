import React from 'react'
import "./follow.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FollowUsersCard from './FollowUsersCard';

const Follow = () => {
  return (
    <div className='follow'>
        <div className='follow-input p'  >
            <SearchOutlinedIcon/>
            <input placeholder='Search Other Users' type='text'/> 
        </div>
        <div className='follow-container p'> 
        <h3 className='text-center'>Follow</h3>
        <div className='follow-users'>
          <FollowUsersCard/>
          <FollowUsersCard/>
          <FollowUsersCard/>
        </div>
        </div>

    </div>
  )
}

export default Follow