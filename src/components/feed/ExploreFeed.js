import React from "react";
import "./feed.css";
import ExplorePagePost from "../posts/ExplorePagePosts";
import Alerts from "../Alerts";

const ExploreFeed = () => {
  return (
    <div className="feed">
      <h2 className="m">Explore </h2>
      <Alerts />
      <ExplorePagePost />
    </div>
  );
};

export default ExploreFeed;
