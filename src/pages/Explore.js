import React, { Fragment } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ExploreFeed from "../components/feed/ExploreFeed";
import Navbar from "../components/Navbar";
import Follow from "../components/follow/Follow";

const Explore = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Navbar />
      </div>
      <section className="home-container">
        <Sidebar />
        <ExploreFeed />
        <Follow />
      </section>
    </Fragment>
  );
};

export default Explore;
