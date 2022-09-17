import React from "react";
import "./user-profile.css";
import { Avatar, Button } from "@mui/material";
import {} from "@mui/material";
import "./user-profile.css";
import { useSelector } from "react-redux/es/exports";
import EditProfileComponent from "./EditProfileComponent";
import Alerts from "../Alerts";

const UserProfileContainer = () => {
  const userDetails = useSelector((state) => state.auth.user);
  console.log(userDetails);

  const existingDetails = JSON.parse(localStorage.getItem("user"));
  console.log(existingDetails);

  return (
    <div className="user-profile-details m">
      <Alerts />
      <h2>Profile</h2>
      <div>
        <div className="profile-pic">
          <Avatar className="m" sx={{ width: 70, height: 70 }} />
          <Button variant="outlined" className="profile-button">
            Update
          </Button>
        </div>
        <h3>{userDetails?.firstName || existingDetails?.firstname}</h3>
        <h4>@{userDetails?.username || existingDetails?.username}</h4>
        <h4>
          Followers:{" "}
          {userDetails?.followers?.length || existingDetails?.followers?.length}
        </h4>
        <h4>
          Following:{" "}
          {userDetails?.following?.length || existingDetails?.following?.length}
        </h4>
        <h4>Bio: {userDetails?.bio || existingDetails?.bio}</h4>
        <h4>
          Profile URL: {userDetails?.profileUrl || existingDetails?.profileUrl}
        </h4>
      </div>
      <div className="edit-profile-component">
        <EditProfileComponent />
      </div>
    </div>
  );
};

export default UserProfileContainer;
