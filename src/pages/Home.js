import React, { Fragment } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Navbar from "../components/Navbar";
import Follow from "../components/follow/Follow";
import Alerts from "../components/Alerts";
const Home = () => {
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

export default Home;
