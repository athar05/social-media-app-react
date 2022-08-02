import React, {useRef} from 'react';
import CreatePost from '../create-post/CreatePost'
import { Button } from '@mui/material';

const EditPost = ({id, value }) => {
  return (
    <div> 
         <form>
         <div className='tweet-box-input'>
             <textarea
            id={id}
             className='input-edit'
             defaultValue={value}
             type='text'
             maxLength="200"
             />
         </div>
         <div className='tweet-box-utilities'>
         <Button sx={{m:1}} type='submit' variant='outlined' className='tweet-box-button'>Save Changes</Button>
         </div>
     </form> 
    </div>
  )
}

export default EditPost