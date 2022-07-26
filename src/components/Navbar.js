import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signOut } from '../features/auth/authSlice';

const Navbar = () => {

  // const authStatus = localStorage.getItem("auth_token")
  const authStatus = localStorage.getItem("auth_token")
  console.log(authStatus)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user")
    dispatch(signOut())
    navigate("/signout")
  }

  return (
    <AppBar position='static' className='navbar'>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label='logo'> 
            {
              (authStatus) ? ( <Link to="/home"> <ConnectWithoutContactIcon/ > </Link>) 
              :
               ( <Link to="/"> <ConnectWithoutContactIcon/ > </Link>)
            }
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}} className="brand-logo">
                ENTREPRENEUR CONNECT
            </Typography>
            <Stack direction='row' spacing={2}>
              {
                authStatus? (<Link to='/signout' className='links'><Button className='button' onClick={clickHandler}>Logout</Button></Link>)
                :
                (
                  (<Link to='/login' className='links'><Button className='button'>Login</Button></Link>)
                )
              }
            </Stack>
        </Toolbar> 
    </AppBar>
  )
}

export default Navbar