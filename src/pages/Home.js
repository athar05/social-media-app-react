import React, {Fragment} from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Feed from '../components/feed/Feed';
import Navbar from "../components/Navbar"
const Home = () => {
  return (
    <Fragment>
      <div className='navbar'>
      <Navbar/>
      </div>
      <section className='home-body'>
      <Sidebar/>
      <Feed/>
      </section>
    </Fragment>
  )
}

export default Home