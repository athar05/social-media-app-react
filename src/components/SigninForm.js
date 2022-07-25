import React, {useRef, Fragment} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {signUp} from "../features/auth/authSlice"
import { setAlert, removeAlert } from '../features/auth/alertSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Alerts from './Alerts';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import LoginIcon from '@mui/icons-material/Login';

const SigninForm = () => {
    const id = nanoid()

    const dispatch =useDispatch();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    //function to sign a user in 

    const signIn = (user) => {
        return axios 
        .post("api/auth/login", user)
        .then((res)=> console.log(res))
    }

    //function to log in guest logins
    const guestLoginHandler = (e) => {
        e.preventDefault();

        const user = {
            username: "adarshbalika",
            password: "adarshBalika123"
        }
        signIn(user)
    }

    //function when user submits the form
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value; 
        const enteredPassword = passwordInputRef.current.value; 
    

        //email validation 

        const email_condition =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const user = {
            username: enteredEmail,
            passowrd: enteredPassword
        }

        if (!enteredEmail || !email_condition.test(enteredEmail)) {
            dispatch(setAlert("Enter A Valid Email Address", "error", id))
            setTimeout(() => {
                dispatch(removeAlert(id))
            }, 5000);
        } else if (enteredPassword.length < 6) {
            dispatch(setAlert("Please Enter A Valid Password", "error", id))
            setTimeout(() => {
                dispatch(removeAlert(id))
            }, 5000);   
        } else {
            signIn(user)
        }
}

    //function to clear input fields after the form is submitted

const clearInputFields = () => {

}

  return (
    <section className='sign-in'>
    <Grid>
      <Paper elevation={5} className="form-wrapper text-center text-primary">
        <Grid align="center">
          <Avatar className='form-avatar'>
           <LoginIcon/>
          </Avatar>
          <h2>Sign In</h2>
          <Typography className='py-1 text-dark'>Please Fill This Form To Sign In </Typography>
        </Grid>
        <form onSubmit={submitHandler}>
          <section>
            <Alerts />
          </section>
          <Box >
          <TextField fullWidth name='email 'label='Email' variant="standard" type="text" required={true} inputRef={emailInputRef}/>
          </Box>
          <Box >   
          <TextField fullWidth name='password' label='Password' variant="standard" type="password" required={true} inputRef={passwordInputRef}/>
          </Box>
          <div className='flex-row-justified'>
          <Box m={1} pt={2}>
          <Button type='submit' variant='contained' className='button' >Sign In</Button>
          </Box>
          <Box m={1} pt={2}>
          <Button variant='contained' className='button' onClick={guestLoginHandler} >Guest Login</Button>
          </Box>
          </div>
          <p className="my-1">Don't have an account? <Link to="/signup">Register Now</Link></p>
        </form>
      </Paper>
    </Grid>
    </section>
  )
}

export default SigninForm