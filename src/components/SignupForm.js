import React, {useRef} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Box } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {signUp} from "../features/auth/authSlice"
import { setAlert, removeAlert } from '../features/auth/alertSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Alerts from './Alerts';
import { useNavigate } from "react-router-dom";

const SignupForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

//stores inputs
  const fNameInputRef = useRef();
  const lNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const reenteredPassowrdInputRef = useRef();



  //function to send a sign up request to the server
  const registerUser = async (userInfo)=> {
   const {data}= await axios.post("/api/auth/signup", userInfo)
   const {createdUser, encodedToken} = await data
   localStorage.setItem('user', JSON.stringify(createdUser));
   localStorage.setItem('auth_token', JSON.stringify(encodedToken))
   return { user: createdUser, token: encodedToken };
  }

   //function when user submits the form

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = fNameInputRef.current.value; 
    const enteredLastName = lNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword= passwordInputRef.current.value; 
    const reEnteredPassword = reenteredPassowrdInputRef.current.value;

    // form validation logic
    const id = nanoid();
    const password_condition_1 = /^(?=.*[0-9]).{6,20}$/;
    const password_condition_2 = /^(?=.*[A-Z]).{6,20}$/;
    const password_condition_3 = /^(?=.*[a-z]).{6,20}$/;
    const email_condition =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(enteredFirstName.length <= 1){
      dispatch(setAlert("First Name Should Be More Than 1 Character", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!enteredEmail.trim()) {
      dispatch(setAlert("Email Is Required", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!email_condition.test(enteredEmail)) {
      dispatch(setAlert("Please Enter A Valid Email Address", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!enteredPassword || !reEnteredPassword) {
      dispatch(setAlert("Please Enter Passwords", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (enteredPassword.length < 6) {
      dispatch(setAlert("Password's Length Should Be More Than 6 Characters", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!password_condition_1.test(enteredPassword)) {
      dispatch(setAlert("Password Must Contain Atleast One Number", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!password_condition_2.test(reEnteredPassword)) {
      dispatch(setAlert("Passwords Must Contain At Least One Uppercase Letter", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!password_condition_3.test(reEnteredPassword)) {
      dispatch(setAlert("Passwords Must Contain At Least One Smallcase Letter", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (enteredPassword !== reEnteredPassword) {
      dispatch(setAlert("Passwords Do Not Match", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else {
      const contactInfo = {firstName: enteredFirstName,
        lastName: enteredLastName, 
        email: enteredEmail, 
        password: enteredPassword,
        }
        //sends request to server and dispatches action to update auth status
        registerUser(contactInfo)
        .then(({user, token})=> dispatch(signUp({user,token})))
        .then(()=> dispatch(setAlert("Sign Up Successful", "success", id)), setTimeout(()=> dispatch(removeAlert(id))))
        .then(()=> 	navigate("/home", { replace: true }))
        .catch((e)=> {
          if (e.response.status === 422) {
            dispatch(setAlert("Username Already Exists", "error", id))
            setTimeout(()=> dispatch(removeAlert(id)), 5000)
          } else {
            dispatch(setAlert(e.response.status, "error", id))
            setTimeout(()=> dispatch(removeAlert(id)), 5000)
          }
        })
      }
    }


  return (
    <section className='sign-up'>
    <Grid>
      <Paper elevation={5} className="form-wrapper text-center text-primary">
        <Grid align="center">
          <Avatar className='form-avatar'>
            <LockOpenIcon/>
          </Avatar>
          <h2>Sign Up</h2>
          <Typography className='py-1 text-dark'>Please Fill This Form To Create An Account </Typography>
        </Grid>
        <form onSubmit={submitHandler}>
          <section>
            <Alerts />
          </section>
          <Box >
          <TextField fullWidth name='fname' label='First Name' autoFocus={true} variant="standard" type="text" required={true} inputRef={fNameInputRef}/>
          </Box>
          <Box >
          <TextField fullWidth name='lname' label='Last Name' variant="standard" type="text" inputRef={lNameInputRef}/>
          </Box>
          <Box >
          <TextField fullWidth name='email 'label='Email' variant="standard" type="text" required={true} inputRef={emailInputRef}/>
          </Box>
          <Box >   
          <TextField fullWidth name='password' label='Password' variant="standard" type="password" required={true} minLength="6" inputRef={passwordInputRef}/>
          </Box>
          <Box>
          <TextField fullWidth name='confirm-password' label='Re-enter Password' variant="standard" type="password" required={true} minLength="6" inputRef={reenteredPassowrdInputRef}/>
          </Box>
          <Box m={1} pt={2}>
          <Button type='submit' variant='contained' className='button'>Sign Up</Button>
          </Box>
          <p className="my-1">Already have an account? <Link to="/login">Sign In</Link></p>
        </form>
      </Paper>
    </Grid>
    </section>
  )
}

export default SignupForm