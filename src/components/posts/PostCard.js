import React, { useState, useEffect, Fragment } from "react";
import "./posts.css";
import { Avatar, Button } from "@mui/material";
import "./posts.css";
import UserComments from "./UserComments";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useRemoveBookmarkMutation } from "../../services/extendedApi";
import AddComment from "./AddComment";
import { useAddLikeMutation } from "../../services/extendedApi";
import { useGetParticularUserQuery } from "../../services/extendedApi";
import { useGetBookmarksQuery } from "../../services/extendedApi";
import { useAddBookmarkMutation } from "../../services/extendedApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteModalComponent from "../modal/DeleteModalComponent";
import EditModalComponent from "../modal/EditModalComponent";
import { useDispatch } from "react-redux";
import { setAlert, removeAlert } from "../../features/slices/alertSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useGetPostsByUsernameQuery } from "../../services/extendedApi";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import LatestPostsCard from "./LatestPostsCard";
import TrendingPostsCard from "./TrendingPostsCard";

const PostCard = ({ posts }) => {
  const id = nanoid();

  const dispatch = useDispatch();

  console.log(posts);

  //get user
  const { _id: userId } = JSON.parse(localStorage.getItem("user"));
  const { data: userData } = useGetParticularUserQuery(userId);
  const currentUserId = userData?.user?._id;
  const currentUsername = userData?.user?.username;

  // console.log(postByUser)

  //get posts
  // const { data, error, isLoading, isSuccess } = useGetPostsQuery();
  // const userPosts = data?.posts
  // console.log(userPosts)

  //getBookmarks

  const { data: bookmarksData } = useGetBookmarksQuery();
  const bookmarks = bookmarksData?.bookmarks;

  //functionality to add a like to a post
  const [addLike] = useAddLikeMutation();

  const addLikeHandler = async (postId, post) => {
    const { data, error, isLoading, isSuccess } = await addLike({ postId });
    // console.log("after like", userData)
    // console.log("after like", data, error, isLoading, isSuccess)
    // console.log( a, b)
  };

  //functionality to bookmark a post
  const [addBookmark] = useAddBookmarkMutation();

  const addBookmarkHandler = async (postId) => {
    const { data, error } = await addBookmark({ postId });
    if (data) {
      dispatch(setAlert("The post has been bookmarked", "success", id));
      setTimeout(() => dispatch(removeAlert(id)), 5000);
    } else if (error) {
      dispatch(setAlert(error.data.errors, "error", id));
      setTimeout(() => dispatch(removeAlert(id)), 5000);
    }
  };

  //functionality to remove a post from bookmarks

  const [removeBookmark] = useRemoveBookmarkMutation();

  const removeBookmarkHandler = async (postId) => {
    const { data, error, isLoading, isSuccess } = await removeBookmark({
      postId,
    });
    console.log(data, error);
    if (data) {
      dispatch(
        setAlert("The post has been removed from bookmarks", "success", id)
      );
      setTimeout(() => dispatch(removeAlert(id)), 5000);
    } else if (error) {
      dispatch(setAlert(error.data.errors, "error", id));
      setTimeout(() => dispatch(removeAlert(id)), 5000);
    }
  };

  const [sort, setSort] = useState({
    default: true,
    sortByTrending: false,
    sortByDate: false,
  });

  const likeSort = () => {
    setSort({
      ...sort,
      default: false,
      sortByTrending: true,
      sortByDate: false,
    });
  };
  const dateSort = () => {
    setSort({
      ...sort,
      default: false,
      sortByTrending: false,
      sortByDate: true,
    });
  };

  return (
    <Fragment>
      <div className="sort-posts m p">
        <h5>Sort By</h5>
        <div>
          <Button variant="outlined" onClick={likeSort}>
            <span>
              <TrendingUpOutlinedIcon />
            </span>
            Trending
          </Button>
        </div>
        <div>
          <Button variant="outlined" onClick={dateSort}>
            <AutorenewOutlinedIcon />
            Latest
          </Button>
        </div>
      </div>
      {sort.sortByTrending && (
        <TrendingPostsCard
          posts={posts}
          currentUsername={currentUsername}
          currentUserId={currentUserId}
          bookmarks={bookmarks}
          id={id}
        />
      )}
      {sort.sortByDate && (
        <LatestPostsCard
          posts={posts}
          currentUsername={currentUsername}
          currentUserId={currentUserId}
          bookmarks={bookmarks}
          id={id}
        />
      )}
      {sort.default &&
        posts?.map((post) => (
          <div className="posts" key={post?._id}>
            <div className="posts-avatar">
              <Avatar
                alt="user-display-pic"
                src="../images/adarsh-balika.jpg"
              />
            </div>
            <div className="posts-body">
              <div className="posts-header p">
                <div className="posts-header-text">
                  <div className="flex-row-align">
                    <h4>{post.firstname}</h4>
                    <span className="posts-header-username">
                      <h4>@{post.username}</h4>
                    </span>
                    {/* <span className='posts-header-timestamp'><h5>{post.createdAt}</h5></span> */}
                  </div>
                  {post.username === currentUsername && (
                    <div className="flex-row">
                      <EditModalComponent
                        post={post}
                        Icon={<EditIcon fontSize="small" />}
                        type={"success"}
                        header={"Edit Your Post Below"}
                        cta={"Save"}
                      />
                      <DeleteModalComponent
                        postId={post._id}
                        Icon={<DeleteIcon />}
                        type={"error"}
                        header={"Are You Sure?"}
                        text={"This will permanently delete your post!"}
                        cta={"Delete"}
                      />
                    </div>
                  )}
                </div>
                <div className="posts-description">
                  <p>{post.content}</p>
                </div>
              </div>
              {/* <img src='https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif' alt='gif'/> */}

              <div className="posts-footer">
                {post.likes.likedBy.find(
                  (item) => item._id === currentUserId
                ) === undefined ? (
                  <button
                    id="post-like"
                    onClick={() =>
                      addLikeHandler(post._id, post, post._id, currentUserId)
                    }
                  >
                    <FavoriteBorderOutlinedIcon fontSize="small" />{" "}
                    <span>{post.likes.likeCount}</span>
                  </button>
                ) : (
                  <button id="post-like" className="active-button">
                    <FavoriteOutlinedIcon fontSize="small" />{" "}
                    <span>{post.likes.likeCount}</span>
                  </button>
                )}

                {bookmarks?.find((item) => item._id === post._id) ===
                undefined ? (
                  <button onClick={() => addBookmarkHandler(post._id)}>
                    <BookmarkBorderOutlinedIcon fontSize="small" />
                  </button>
                ) : (
                  <button onClick={() => removeBookmarkHandler(post._id)}>
                    <BookmarkOutlinedIcon fontSize="small" />
                  </button>
                )}
              </div>

              <div>
                <AddComment id={post?._id} />
              </div>
              <div className="user-comments-body">
                <UserComments id={post?._id} />
              </div>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default PostCard;
