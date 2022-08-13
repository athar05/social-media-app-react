import React, {Fragment} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Follow from '../components/follow/Follow';
import BookmarksContainer from '../components/feed/BookmarksContainer';

const Bookmark = () => {
  return (
    <Fragment>
      <div className='navbar'>
      <Navbar/>
      </div>
      <section className='bookmarks-container'>
      <Sidebar/>
      <BookmarksContainer/>
      <Follow/>
      </section>
    </Fragment>
  )
}

export default Bookmark