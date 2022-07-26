import React from 'react';
import { Paper, Grid, Avatar, Button, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const LogoutCard = () => {
  return (
    <section className='sign-out'>
        <Grid>
        <Paper elevation={5}  className="form-wrapper text-center text-primary">
            <Grid align="center">
            <Avatar className='form-avatar'>
            <LogoutIcon/>
          </Avatar>
            </Grid>
            <h2>You have logged out</h2>
            <Grid className='flex-row-justified'>
                <Box sx={{m:1}}>
                  <Link to="/login" className='links'> <Button variant='contained'>Login Again</Button></Link>
                </Box>
                <Box sx={{m:1}}>
                   <Link to="/" className='links'> <Button variant='contained'>Ok</Button></Link>
                </Box>
            </Grid>
        </Paper>
        </Grid>
    </section>
  )
}

export default LogoutCard