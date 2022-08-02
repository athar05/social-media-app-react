import React, {useRef, Fragment} from 'react';
import CreatePost from '../create-post/CreatePost'
import { Button } from '@mui/material';
import { useGetPostsByUsernameQuery } from '../../services/extendedApi';
import { useGetParticularUserQuery } from '../../services/extendedApi';

const EditPost = (id) => {
console.log(id)
    
    const {_id:userId} = JSON.parse(localStorage.getItem("user"))
    const {data: userData} = useGetParticularUserQuery(userId);
    const currentUserId = userData?.user?._id
    const currentUsername = userData?.user?.username
    const {data : postByUser} = useGetPostsByUsernameQuery(userData?.user?.username);
    console.log({id})
    console.log(postByUser?.posts)
    console.log(postByUser?.posts.find(item=> item._id === id))
    const editPost = null;

  return (
    <Fragment> 
        <div className='posts' key={id}>
            <form>
         <div className='tweet-box-input'>
             <textarea
            //  defaultValue={}
             className='input-edit'
             type='text'
             maxLength="200"
             />
         </div>
         <div className='tweet-box-utilities'>
         <Button sx={{m:1}} type='submit' variant='outlined' className='tweet-box-button'>Save Changes</Button>
         </div>
     </form> 
        </div>
     </Fragment>
   )
}

export default EditPost