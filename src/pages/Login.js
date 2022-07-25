import React, {Fragment} from 'react';
import SigninForm from '../components/SigninForm';
import Navbar from '../components/Navbar';


const Login = () => {
  return (
    <Fragment>
      <div>
    <Navbar/>
      </div>
      <div>
    <SigninForm/>
      </div>
  </Fragment>
  )
}

export default Login