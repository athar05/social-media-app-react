import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import "./modal.css"
import { useDeletePostMutation } from '../../services/extendedApi';

const ModalComponent = ({postId, Icon, header, text, type, cta}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deletePost] = useDeletePostMutation();

  const deleteHandler = async (postId) => {
    console.log({postId})
    deletePost(postId);
    handleClose();
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {text}
          </Typography>
          <Button onClick={()=>deleteHandler({postId})} color={type} className='m'>{cta}</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent