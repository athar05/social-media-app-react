import React, {Fragment} from 'react';
import Navbar from '../components/Navbar';
import LogoutCard from '../components/LogoutCard';
import { useLocation } from 'react-router-dom';

const Signout = () => {
  const location = useLocation();
  console.log(location.pathname === "/signout")
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