import React, { useRef, useState } from "react";
import "./user-profile.css";
import { Avatar, Button } from "@mui/material";
import "./user-profile.css";
import { useSelector } from "react-redux/es/exports";
import EditProfileComponent from "./EditProfileComponent";
import Alerts from "../Alerts";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useDispatch } from "react-redux/es/exports";
import { setAlert } from "../../features/slices/alertSlice";
import { removeAlert } from "../../features/slices/alertSlice";
import { nanoid } from "@reduxjs/toolkit";

const UserProfileContainer = () => {
  const id = nanoid();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.auth.user);

  const existingDetails = JSON.parse(localStorage.getItem("user"));

  const fileUploadRef = useRef(null);

  const [profilePic, setProfilePic] = useState("");

  const clickHandler = () => {
    fileUploadRef.current.click();
  };

  const imageUploadChangeHandler = (event) => {
    setProfilePic(URL.createObjectURL(event.target.files[0]));
    dispatch(setAlert("Profile Pic Added", "success", id));
    setTimeout(() => dispatch(removeAlert(id)), 5000);
  };

  return (
    <div className="user-profile-details m">
      <Alerts />
      <h2>Your profile</h2>
      <div>
        <div className="profile-pic">
          <Avatar
            className="m"
            sx={{ width: 70, height: 70 }}
            src={profilePic}
          />
          <AddCircleOutlineRoundedIcon
            id="upload-image-btn"
            onClick={clickHandler}
          />
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileUploadRef}
            onChange={imageUploadChangeHandler}
          />
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
