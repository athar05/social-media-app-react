import React,  {Fragment} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Follow from '../components/follow/Follow';
import UserProfileContainer from '../components/user-profile/UserProfileContainer';

const UserProfile = () => {
  return (
    <Fragment>
    <div className='navbar'>
    <Navbar/>
    </div>
    <section className='profile-container'>
    <Sidebar/>
    <UserProfileContainer/>
    <Follow/>
    </section>
  </Fragment>
  )
}

export default UserProfile