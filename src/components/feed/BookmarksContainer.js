import React, {Fragment} from 'react';
import "./feed.css"
import Alerts from '../Alerts';
import BookmarkedPosts from '../posts/BookmarkedPosts';
import { useGetBookmarksQuery } from '../../services/extendedApi';


const BookmarksContainer = () => {
  const {data:bookmarkedPosts, error, isLoading, isSuccess} = useGetBookmarksQuery();

  const posts = bookmarkedPosts?.bookmarks
  return (
    <div className="bookmark-feed">
      <Alerts/>
      <BookmarkedPosts posts={posts}/>
    </div>
  )
}

export default BookmarksContainer