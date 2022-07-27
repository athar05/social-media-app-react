import React, {useRef, Fragment, useState} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Input } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {signIn} from "../features/auth/authSlice"
import { setAlert, removeAlert } from '../features/auth/alertSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Alerts from './Alerts';
import { useNavigate } from "react-router-dom"; 
import LoginIcon from '@mui/icons-material/Login';

const SigninForm = () => {
    const id = nanoid()

    const dispatch =useDispatch();
    const navigate = useNavigate()

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    //show/hide password functionality

    const [showPassword, setShowPassword] = useState(false)

    const showPassowordHandler = () => {
      setShowPassword((prev)=> !prev)
    }

    //function to send a sign in request to a user

    const signInUser = async (userInfo) => {
      const {data}= await axios.post("api/auth/login", userInfo);
      console.log(data)
      const {createdUser, encodedToken} = await data;
      localStorage.setItem('user', JSON.stringify(createdUser));
      localStorage.setItem('auth_token', JSON.stringify(encodedToken))
      return { user: createdUser, token: encodedToken };
    }

    //function to send a guest sign in request to a server
    const guestLoginHandler = (e) => {
        e.preventDefault();

        const user = {
            username: "adarshbalika",
            password: "adarshBalika123"
        }
        signInUser(user)
        .then(({user, token})=> dispatch(signIn({user,token})))
        .then(()=> dispatch(setAlert("Sign Up Successful", "success", id)))
        .then(()=> setTimeout(()=> dispatch(removeAlert(id))))
        .then(()=> 	navigate("/home", { replace: true }))
        .catch((e)=> {
          if (e.response.status=== 422) {
            dispatch(setAlert("Username Already Exists", "error", id))
            setTimeout(()=> dispatch(removeAlert(id)), 5000)
          } else {
            dispatch(setAlert(e.response.status, "error", id))
            setTimeout(()=> dispatch(removeAlert(id)), 5000)
          }
        })
    }

    //function when user submits the form
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredUsername = usernameInputRef.current.value; 
        const enteredPassword = passwordInputRef.current.value; 
    

        //form validation 

        const user = {
            username: enteredUsername,
            password: enteredPassword
        }


        if (!enteredUsername || enteredUsername.length <= 4 ) {
            dispatch(setAlert("Enter A Valid Username", "error", id))
            setTimeout(() => {
                dispatch(removeAlert(id))
            }, 5000);
        } else if (enteredPassword.length < 6) {
            dispatch(setAlert("Please Enter A Valid Password", "error", id))
            setTimeout(() => {
                dispatch(removeAlert(id))
            }, 5000);   
        } else {
            signInUser(user)
            .then(({user, token})=> dispatch(signIn({user,token})))
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

    //function to clear input fields after the form is submitted

const clearInputFields = () => {
  usernameInputRef.current.value = "";
  passwordInputRef.current.value="";
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
          <FormControl fullWidth sx={{ m: 1}}>
          <TextField fullWidth name='username 'label='username' variant="standard" type="text" required={true} inputRef={usernameInputRef}/>
          </FormControl>
          <FormControl required={true} variant='standard' fullWidth sx={{ m: 1}}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
          fullWidth
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