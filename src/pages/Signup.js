import React, {Fragment} from 'react';
import Navbar from '../components/Navbar';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <Fragment>
     <div>
      <Navbar/>
    </div>
    <div>
      <SignupForm/>
    </div>
    </Fragment>
  )
}

export default Signup