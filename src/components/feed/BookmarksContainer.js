import React, {Fragment} from 'react';
import "./feed.css"
import Alerts from '../Alerts';
import BookmarkedPosts from '../posts/BookmarkedPosts';
import { useDispatch } from 'react-redux/es/exports';
import { useGetBookmarksQuery } from '../../services/extendedApi';
import PostCard from '../posts/PostCard';


const BookmarksContainer = () => {
  const {data:bookmarkedPosts, error, isLoading, isSuccess} = useGetBookmarksQuery();

  const posts = bookmarkedPosts?.bookmarks
  return (
    <div className="bookmark-feed">
      <Alerts/>
      <BookmarkedPosts posts={posts}/>
      {/* <PostCard posts={posts}/> */}
    </div>
  )
}

export default BookmarksContainer