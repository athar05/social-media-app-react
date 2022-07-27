import React, {Fragment} from 'react';
import Navbar from '../components/Navbar';
import LogoutCard from '../components/LogoutCard';

const Signout = () => {
  return (
    <Fragment>
      <div>
        <Navbar/>
      </div>
      <div>
        <LogoutCard/>
      </div>
    </Fragment>
  )
}

export default Signout