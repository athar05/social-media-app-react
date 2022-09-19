import React, { Fragment } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
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
        <Feed />
        <Follow />
      </section>
    </Fragment>
  );
};

export default Explore;
