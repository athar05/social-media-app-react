import React, { Fragment, useEffect } from "react";
import PostCard from "./PostCard";
import { useGetPostsQuery } from "../../services/extendedApi";
import { CircularProgress } from "@mui/material";
import "../sort-posts/sortposts.css";
import { addAllPosts } from "../../features/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  useGetUsersQuery,
  useGetParticularUserQuery,
} from "../../services/extendedApi";

const Post = () => {
  const dispatch = useDispatch();

  const { data } = useGetUsersQuery();

  console.log(data);

  const { _id: userId, firstName: userFirstName } = JSON.parse(
    localStorage.getItem("user")
  );
  const { data: userData } = useGetParticularUserQuery(userId);
  const followingUsers = userData?.user?.following;

  const followingArray = followingUsers?.map((el) => el.firstName);
  console.log(followingArray?.map((el) => el));

  //get posts
  const { data: poData, error, isLoading, isSuccess } = useGetPostsQuery();
  const userPosts = poData?.posts;
  dispatch(addAllPosts(userPosts));

  const allPosts = useSelector((state) => state.posts?.allPosts);
  console.log(userPosts?.map((el) => el.firstname));
  console.log(
    userPosts?.map((el) => el.firstname === followingArray?.map((el) => el))
  );
  console.log(userPosts?.map((el) => el.firstname === "Athar"));

  const getPosts = (arr1, arr2) => {
    const finalPosts = [];

    userPosts?.forEach((el) =>
      followingArray?.forEach((el2) => {
        if (el.firstname === el2 || el.firstname === userFirstName) {
          finalPosts.push(el);
        }
      })
    );
    return finalPosts;
  };

  console.log(followingArray);

  // const getPosts2 = userPosts?.forEach((el) =>
  //   followingArray?.forEach(
  //     (el2) => el.firstname === el2 || el.firstname === userFirstName
  //   )
  // );

  // console.log(getPosts2);

  const updatedPosts = getPosts(userPosts, followingArray);
  console.log(updatedPosts);

  return (
    <Fragment>
      {isLoading && (
        <div className="text-center">
          <CircularProgress />
        </div>
      )}
      {error && <h2>There Was An Error Loading Data</h2>}
      {isSuccess && <PostCard posts={updatedPosts} />}
    </Fragment>
  );
};

export default Post;
