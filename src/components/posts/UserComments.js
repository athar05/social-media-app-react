import React, {Fragment} from 'react';
import { Avatar } from '@mui/material';
import { useGetCommentsQuery } from '../../services/extendedApi';

const UserComments = ({id}) => {
  const { data, error, isLoading, isSuccess } = useGetCommentsQuery(id);
  const comments = data?.comments
  
  return (
    <Fragment>
      {
        isLoading && <h5 className='text-center p'>Loading comments....</h5>
      }
      {error && <h5 className='text-center p'>Error in loading comments</h5>}
      {isSuccess?
      (
         comments?.map(comment=> (
          <div className='user-comments m' key={comment._id}>
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
      !error && <h5> No one has commented yet</h5>
       )
      }
    </Fragment>
    
  )
}

export default UserComments