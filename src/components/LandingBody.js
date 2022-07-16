import React from 'react';
import {Stack, Button } from '@mui/material'; 
import {Link} from 'react-router-dom'

const LandingBody = () => {
  return (
    <section className="landing">
    <div>
      <div className="landing-inner">
        <h1 className="x-large">Entrepreneur Connector</h1>
        <p className='lead'>
          A platform to connect with other entrepreneurs, VCs and peers.
        </p>
        <Stack direction='row' spacing={2}>
          <Link to="/login" style={{textDecoration: 'none'}}><Button variant='contained' className="buttons">Login</Button></Link>
        <Link to="/register" style={{textDecoration: 'none'}}><Button variant='contained' className="buttons">Register</Button></Link>
        </Stack>
      </div>
    </div>
  </section>
  )
}

export default LandingBody