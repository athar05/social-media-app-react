import React, {useRef} from 'react'
import {TextField, Button, Box, InputAdornment, FormControl} from '@mui/material'
import "./user-profile.css"
import { useEditProfileMutation } from '../../services/extendedApi'
import { useGetParticularUserQuery } from '../../services/extendedApi'
import axios from "axios"
import { updateUser } from '../../features/slices/authSlice'
import { useDispatch } from 'react-redux/es/exports'

const EditProfileComponent = () => {

    const dispatch= useDispatch();

    const {_id:userId} = JSON.parse(localStorage.getItem("user"))
    const {data: userData} = useGetParticularUserQuery(userId);

    const userFirstNameInputRef = useRef();
    const userUserNameInputRef = useRef();
    const userBioInputRef = useRef();
    const userProfileUrlInputRef = useRef();

    const [EditProfile] = useEditProfileMutation();

    const updateUserInfo = async (updatedInfo) => {
        console.log({updatedInfo})
       const {updatedUserData} = await axios.post("api/users/edit", {updatedInfo})
       console.log(updatedUserData)
        // return axios
        // .post("api/users/edit", {updatedInfo})
        // .then((res) => console.log(res.data))
        // .then((data) => {
        //   return data.user;
        // });
    }

    const editProfileHandler = async (e) => {
        e.preventDefault();

        const  updatedInfo = {
            firstName: userFirstNameInputRef?.current?.value,
            username: userUserNameInputRef?.current?.value, 
            bio: userBioInputRef?.current?.value, 
            profileUrl: userProfileUrlInputRef?.current?.value,
        }
            updateUserInfo({updatedInfo})
            console.log(updatedInfo)
            ?.then((data) => {
              console.log('updated user ', data);
              dispatch(updateUser(data));
            })
            ?.catch((error) => {
              console.log(error.message);
            });
         
    }

  return (
    <div className='edit-profile-component'>
        <h2>Edit Profile</h2>
        <Box >
        <form className='edit-profile-component-form m'>
            <FormControl sx={{ m: 1}}>
            <TextField
            inputRef={userFirstNameInputRef}
            InputProps={{
                startAdornment: <InputAdornment position="start">First Name:</InputAdornment>,
              }}/>
              </FormControl>
              <FormControl  sx={{ m: 1}}>
            <TextField
            inputRef={userUserNameInputRef}
             InputProps={{
                startAdornment: <InputAdornment position="start">User Name:</InputAdornment>,
              }}/>
              </FormControl>
              <FormControl  sx={{ m: 1}}>
            <TextField
            inputRef={userBioInputRef}
             InputProps={{
                startAdornment: <InputAdornment position="start">Bio:</InputAdornment>,
              }}/>
             </FormControl>
             <FormControl  sx={{ m: 1}}>
            <TextField
            inputRef={userProfileUrlInputRef}
             InputProps={{
                startAdornment: <InputAdornment position="start">Profile URL:</InputAdornment>,
              }}/>
              </FormControl>
            <Button className='profile-button' onClick={(e)=>editProfileHandler(e)}> Save </Button>
        </form>
        </Box>
    </div>
  )
}

export default EditProfileComponent