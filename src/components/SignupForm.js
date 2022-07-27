import React, {useRef, useState} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {signUp} from "../features/auth/authSlice"
import { setAlert, removeAlert } from '../features/auth/alertSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Alerts from './Alerts';
import { useNavigate } from "react-router-dom";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

const SignupForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //function to show/hide passoword value to users 

  const [showPassword, setShowPassword] = useState(false)

  const showPassowordHandler = () => {
    setShowPassword((prev)=> !prev)
  }

//stores inputs
  const fNameInputRef = useRef();
  const lNameInputRef = useRef();
  const usernameInputRef = useRef();
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

  //function to clear input fields after user submits the form 

  const clearInputFields = () => {
    fNameInputRef.current.value = "";
    lNameInputRef.current.value= "";
    usernameInputRef.current.value="";
    passwordInputRef.current.value="";
    reenteredPassowrdInputRef.current.value="";
  }

   //function when user submits the form

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = fNameInputRef.current.value; 
    const enteredLastName = lNameInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword= passwordInputRef.current.value; 
    const reEnteredPassword = reenteredPassowrdInputRef.current.value;

    // form validation logic
    const id = nanoid();
    const password_condition_1 = /^(?=.*[0-9]).{6,20}$/;
    const password_condition_2 = /^(?=.*[A-Z]).{6,20}$/;
    const password_condition_3 = /^(?=.*[a-z]).{6,20}$/;
    const username_condition_1 =  /^[0-9a-zA-Z]+$/;
    const username_condition_2 = /^[a-zA-Z]/;

    if(enteredFirstName.length <= 1){
      dispatch(setAlert("First Name Should Be More Than 1 Character", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!enteredUsername.trim()) {
      dispatch(setAlert("Username Is Required", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!username_condition_2.test(enteredUsername)) {
      dispatch(setAlert("Username Should Begin With A Letter", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!username_condition_1.test(enteredUsername) || enteredUsername.length < 4) {
      dispatch(setAlert("Username Should Have Atleast 4 Characters And Can Only Contain Letters & Numbers", "error", id))
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
    } else if (enteredPassword !== reEnteredPassword) {
      dispatch(setAlert("Passwords Do Not Match", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!password_condition_2.test(reEnteredPassword)) {
      dispatch(setAlert("Passwords Must Contain At Least One Uppercase Letter", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else if (!password_condition_3.test(reEnteredPassword)) {
      dispatch(setAlert("Passwords Must Contain At Least One Smallcase Letter", "error", id))
      setTimeout(() => dispatch(removeAlert(id)), 5000)
    } else {
      const contactInfo = {firstName: enteredFirstName,
        lastName: enteredLastName, 
        username: enteredUsername, 
        password: enteredPassword,
        }
        //sends request to server and dispatches action to update auth status
        registerUser(contactInfo)
        .then(({user, token})=> dispatch(signUp({user,token})))
        .then(()=> dispatch(setAlert("Sign Up Successful", "success", id)))
        .then(()=> setTimeout(()=> dispatch(removeAlert(id))))
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

      clearInputFields()
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
          <FormControl fullWidth sx={{ m: 1}} >
          <TextField name='fname' label='First Name' autoFocus={true} variant="standard" type="text" required={true} inputRef={fNameInputRef}/>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1}} >
          <TextField name='lname' label='Last Name' variant="standard" type="text" inputRef={lNameInputRef}/>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1}} >
          <TextField name='username 'label='Username' variant="standard" type="text" required={true} inputRef={usernameInputRef}/>
          </FormControl>
          <FormControl required={true} variant='standard' fullWidth sx={{ m: 1}}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
          name='password'
          variant='standard'
            type={showPassword ? 'text' : 'password'}
            inputRef={passwordInputRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={showPassowordHandler}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>
          <FormControl required={true} variant='standard' fullWidth sx={{ m: 1}}>
          <InputLabel htmlFor="standard-adornment-password">Re-enter Password</InputLabel>
          <Input
          name='password'
          variant='standard'
            type={showPassword ? 'text' : 'password'}
            inputRef={reenteredPassowrdInputRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={showPassowordHandler}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>
          <FormControl sx={{ m: 1}}>
          <Button  type='submit' variant='contained' className='button'>Sign Up</Button>
          </FormControl>
          <p className="my-1">Already have an account? <Link to="/login">Sign In</Link></p>
        </form>
      </Paper>
    </Grid>
    </section>
  )
}

export default SignupForm