import React from 'react'
import "./follow.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FollowUsersCard from './FollowUsersCard';
import { useGetUsersQuery } from '../../services/extendedApi';

const Follow = () => {

  const {data, error, isLoading, isSuccess} = useGetUsersQuery();

  return (
    <div className='follow'>
        <div className='follow-input p'  >
            <SearchOutlinedIcon/>
            <input placeholder='Search Other Users' type='text'/> 
        </div>
        <div className='follow-container p'> 
        <h3 className='text-center'>Follow</h3>
        <div className='follow-users'>
          <FollowUsersCard data={data} error={error} isLoading={isLoading} isSuccess={isSuccess}/>
        </div>
        </div>

    </div>
  )
}

export default Follow