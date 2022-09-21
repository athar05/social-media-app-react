import React, { Fragment } from "react";
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
  console.log(followingArray);

  //get posts
  const { data: poData, error, isLoading, isSuccess } = useGetPostsQuery();
  // dispatch(addAllPosts(poData?.posts));

  const allPosts = poData?.posts;

  const getPosts = (arr1, arr2, string) => {
    const finalPosts = [];

    arr1?.forEach((el) =>
      arr2.forEach((el2) => {
        if (el?.firstname === el2 || el?.firstname === string) {
          finalPosts.push(el);
        }
      })
    );

    const jsonObj = finalPosts.map(JSON.stringify);
    const uniqueSet = new Set(jsonObj);
    const uniqueArr = Array.from(uniqueSet).map(JSON.parse);

    return uniqueArr;
    // return finalPosts;
  };

  console.log(followingArray);

  // const getPosts2 = userPosts?.forEach((el) =>
  //   followingArray?.forEach(
  //     (el2) => el.firstname === el2 || el.firstname === userFirstName
  //   )
  // );

  // console.log(getPosts2);

  const updatedPosts = getPosts(
    allPosts,
    followingArray?.length > 0 ? followingArray : [""],
    userFirstName
  );

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
