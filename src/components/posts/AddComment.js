import React, {useRef} from 'react'
import "./posts.css"
import {Button, Avatar} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useAddCommentMutation} from "../../services/extendedApi"

const AddComment = ({id: postId}) => {

    const commentInputRef = useRef();

    const [addComment] = useAddCommentMutation();
    
    const addCommentHandler = async ()=> {
        
        let userComment = commentInputRef.current.value;

        if (userComment) {
            let commentData = {
                text: userComment
            }
        await addComment({postId, commentData})
        clearInputs();
        }
        
    }

    // function to clear inputs

    const clearInputs = () => {
        commentInputRef.current.value=""
    }

  return (
    <div className='add-comments'>
         <Avatar/>
         <input
          placeholder='Add comment'
          type= "text"
          ref={commentInputRef}
           />
          <Button onClick={addCommentHandler}><AddCircleIcon/></Button>
    </div>
  )
}

export default AddComment