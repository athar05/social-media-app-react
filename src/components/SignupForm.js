import React, {useRef} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Box } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {signUp} from "../features/auth/authSlice"
import { useDispatch, useSelector } from 'react-redux';

const SignupForm = () => {

  const dispatch = useDispatch();

  const fNameInputRef = useRef();
  const lNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const reenteredPassowrdInputRef = useRef();
  const registerUser = async (userInfo)=> {
   const {data}= await axios.post("/api/auth/signup", userInfo)
   const {createdUser, encodedToken} = await data
   localStorage.setItem('user', JSON.stringify(createdUser));
   localStorage.setItem('auth_token', JSON.stringify(encodedToken))
   return { user: createdUser, token: encodedToken };
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted")

    const enteredFirstName = fNameInputRef.current.value; 
    const enteredLastName = lNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword= passwordInputRef.current.value; 

    const contactInfo = {firstName: enteredFirstName,
      lastName: enteredLastName, 
      email: enteredEmail, 
      password: enteredPassword,
      }

      registerUser(contactInfo).then(({user, token})=> dispatch(signUp({user,token})))
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
          <Box m={1}>
          <TextField fullWidth name='fname' label='First Name' autoFocus={true} variant="standard" type="text" required={true} ref={fNameInputRef}/>
          </Box>
          <Box m={1}>
          <TextField fullWidth name='lname' label='Last Name' variant="standard" type="text" ref={lNameInputRef}/>
          </Box>
          <Box m={1}>
          <TextField fullWidth name='email 'label='Email' variant="standard" type="text" required={true} ref={emailInputRef}/>
          </Box>
          <Box m={1}>   
          <TextField fullWidth name='password' label='Password' variant="standard" type="password" required={true} minLength="6" ref={passwordInputRef}/>
          </Box>
          <Box m={1}>
          <TextField fullWidth name='confirm-password' label='Re-enter Password' variant="standard" type="password" required={true} minLength="6" ref={reenteredPassowrdInputRef}/>
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