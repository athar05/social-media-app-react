import React, { Fragment } from "react";
import PostCard from "./PostCard";
import { useGetPostsQuery } from "../../services/extendedApi";
import { CircularProgress } from "@mui/material";
import "../sort-posts/sortposts.css";

const ExplorePagePost = () => {
  //get posts
  const { data: poData, error, isLoading, isSuccess } = useGetPostsQuery();

  const allPosts = poData?.posts;

  return (
    <Fragment>
      {isLoading && (
        <div className="text-center">
          <CircularProgress />
        </div>
      )}
      {error && <h2>There Was An Error Loading Data</h2>}
      {isSuccess && <PostCard posts={allPosts} />}
    </Fragment>
  );
};

export default ExplorePagePost;
