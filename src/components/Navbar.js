import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label='logo'> 
                <ConnectWithoutContactIcon/ >
            </IconButton>
            <Typography variant='h6' component='div'>
                ENTREPRENEUR CONNECT
            </Typography>
        </Toolbar> 

    </AppBar>
  )
}

export default Navbar