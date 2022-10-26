import React, { Fragment } from "react";
import PostCard from "./PostCard";
import { useGetPostsQuery } from "../../services/extendedApi";
import { CircularProgress } from "@mui/material";
import "../sort-posts/sortposts.css";
import {
  useGetUsersQuery,
  useGetParticularUserQuery,
} from "../../services/extendedApi";

const Post = () => {
  const { data } = useGetUsersQuery();

  const { _id: userId, firstName: userFirstName } = JSON.parse(
    localStorage.getItem("user")
  );
  const { data: userData } = useGetParticularUserQuery(userId);
  const followingUsers = userData?.user?.following;

  const followingArray = followingUsers?.map((el) => el.firstName);

  //get posts
  const { data: poData, error, isLoading, isSuccess } = useGetPostsQuery();

  const allPosts = poData?.posts;

  //function to filter posts of following users only

  const getPosts = (arr1, arr2, string) => {
    const finalPosts = [];

    arr1?.forEach((el) =>
      arr2.forEach((el2) => {
        if (el?.firstname === el2 || el?.firstname === string) {
          finalPosts.push(el);
        }
      })
    );

    //to remove duplicate elements from the posts array
    const jsonPost = finalPosts.map(JSON.stringify);
    const filteredPosts = new Set(jsonPost);
    const uniquePosts = Array.from(filteredPosts).map(JSON.parse);

    return uniquePosts;
  };

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
