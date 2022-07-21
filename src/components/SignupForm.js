import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Box } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';

const SignupForm = () => {
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
        <form>
          <Box m={1}>
          <TextField fullWidth name='fname' label='First Name' autoFocus={true} variant="standard" type="text" required={true}/>
          </Box>
          <Box m={1}>
          <TextField fullWidth name='lname' label='Last Name' variant="standard" type="text"/>
          </Box>
          <Box m={1}>
          <TextField fullWidth name='email 'label='Email' variant="standard" type="text" required={true}/>
          </Box>
          <Box m={1}>   
          <TextField fullWidth name='password' label='Password' variant="standard" type="password" required={true} minLength="6"/>
          </Box>
          <Box m={1}>
          <TextField fullWidth name='confirm-password' label='Re-enter Password' variant="standard" type="password" required={true} minLength="6"/>
          </Box>
          <Box m={1} pt={2}>
          <Button type='submit' variant='contained' className='button'>Sign Up</Button>
          </Box>
          <p class="my-1">Already have an account? <Link to="/login">Sign In</Link></p>
        </form>
      </Paper>
    </Grid>
    </section>
  )
}

export default SignupForm