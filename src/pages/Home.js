import React, {Fragment} from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Feed from '../components/feed/Feed';
import Navbar from "../components/Navbar"
const Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <section className='home-body'>
      <Sidebar/>
      <Feed/>
      </section>
    </Fragment>
  )
}

export default Home