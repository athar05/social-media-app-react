import React, {Fragment} from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Feed from '../components/feed/Feed';
import Navbar from "../components/Navbar"
import Widgets from '../components/widgets/Widgets';
const Home = () => {
  return (
    <Fragment>
      <div className='navbar'>
      <Navbar/>
      </div>
      <section className='home-container'>
      <Sidebar/>
      <Feed/>
      <Widgets/>
      </section>
    </Fragment>
  )
}

export default Home