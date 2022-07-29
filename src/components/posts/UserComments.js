import React, {Fragment} from 'react';
import { Avatar } from '@mui/material';
import { useGetCommentsQuery } from '../../services/extendedApi';

const UserComments = ({id}) => {
  console.log(id)
  const { data, error, isLoading, isSuccess } = useGetCommentsQuery(id);
  console.log(data, error)
  const comments = data?.comments
  return (
    <Fragment>
      {
        comments? ( comments?.map(comment=> (
          <div className='user-comments m'>
          <div className='user-comments-details'> 
          <Avatar/>    
          </div>
          <div className='user-comments-description'>
              <h6>@{comment.username}</h6>
              <p>{comment.text}</p>
          </div>
      </div>
        ))
         
        ) 
        : 
        (
          <h6 className='text-center p'>No Comments Available</h6>
        )
      }
    </Fragment>
    
  )
}

export default UserComments