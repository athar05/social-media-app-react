import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position='static' className='navbar'>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label='logo'> 
                <ConnectWithoutContactIcon/ >
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}} className="brand-logo">
                ENTREPRENEUR CONNECT
            </Typography>
            <Stack direction='row' spacing={2}>
            <Link to='/login' style={{textDecoration: 'none'}}><Button style={{color: 'white'}}>Login</Button></Link>
            <Link to='/register' style={{textDecoration: 'none'}}><Button style={{color: 'white'}}>Register</Button></Link>
            </Stack>
        </Toolbar> 

    </AppBar>
  )
}

export default Navbar