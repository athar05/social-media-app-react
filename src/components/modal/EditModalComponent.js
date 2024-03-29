import React, {useState, useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import "./modal.css"
import { useDispatch } from 'react-redux';
import { setAlert, removeAlert } from '../../features/slices/alertSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useGetPostsByPostIdQuery } from '../../services/extendedApi';
import { useEditPostMutation } from '../../services/extendedApi';
import "../create-post/createpost.css"
import { Avatar } from '@mui/material';


const EditModalComponent = ({post, Icon, header, text, type, cta}) => {

    const editPostInputRef = useRef();

    // console.log(post)

    const id = nanoid();
    const dispatch = useDispatch();
  
    const [open, setOpen] = useState(false);

    const handleOpen = (postId) => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
  
    const [editPost]= useEditPostMutation();
  
    const submitHandler = async (e, {post}) => {
        e.preventDefault()
        console.log(post, editPostInputRef.current.value)
     const {data, error, isLoading, isSuccess}= await editPost({
        ...post, 
        content: editPostInputRef.current.value
     });
     console.log(data, error, isSuccess)
      handleClose();
      if (data) {
        dispatch(setAlert("Post successfully edited", "success", id))
        setTimeout(()=> dispatch(removeAlert(id)), 5000)  
      } else if (error) {
        dispatch(setAlert("Post could not be edited", "error", id))
      setTimeout(()=> dispatch(removeAlert(id)), 5000)  
      }
    }

  return (
    <div className='modal'>
      <Button onClick={handleOpen}>{Icon}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-container">
          <div className='flex-row-space-between'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {header}
          </Typography>
          <Button onClick={handleClose}>
          <CloseIcon/>
          </Button>
          </div>
          <div className='tweet-box'>
          <form onSubmit={(e) =>submitHandler(e, {post})}>
            <div className='tweet-box-input'>
              <Avatar/>
          <textarea id="modal-modal-description" 
          autoFocus
          type='text'
          maxLength="200"
          defaultValue={post.content}
          ref={editPostInputRef}
          />
            </div>
          <Button type='submit' color={type} variant='outlined' className='tweet-box-button'>{cta} </Button>
          </form>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default EditModalComponent