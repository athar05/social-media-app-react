import React, {Fragment} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Fragment>
      <Navbar/>
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
            <TextField fullWidth name='fname' label='First Name' autoFocus={true} variant="standard" type="text" required={true}/>
            <TextField fullWidth name='lname' label='Last Name' variant="standard" type="text"/>
            <TextField fullWidth name='email 'label='Email' variant="standard" type="text" required={true}/>
            <TextField fullWidth name='password' label='Password' variant="standard" type="password" required={true} minLength="6"/>
            <TextField fullWidth name='confirm-password' label='Re-enter Password' variant="standard" type="password" required={true} minLength="6"/>
            <Button type='submit' variant='contained'>Sign Up</Button>
            <p class="my-1">Already have an account? <Link to="/login">Sign In</Link></p>
          </form>
        </Paper>
      </Grid>
      </section>
    </Fragment>
  )
}

export default Signup