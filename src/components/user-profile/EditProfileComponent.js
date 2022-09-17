import React, { useRef, useState } from "react";
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  FormControl,
} from "@mui/material";
import "./user-profile.css";
import { useEditProfileMutation } from "../../services/extendedApi";
import axios from "axios";
import { updateUser } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux/es/exports";
import { setAlert } from "../../features/slices/alertSlice";
import { removeAlert } from "../../features/slices/alertSlice";
import { nanoid } from "@reduxjs/toolkit";

const EditProfileComponent = () => {
  const dispatch = useDispatch();
  const id = nanoid();

  const { _id: userId } = JSON.parse(localStorage.getItem("user"));
  const encodedToken = JSON.parse(localStorage.getItem("auth_token"));

  const userFirstNameInputRef = useRef();
  const userUserNameInputRef = useRef();
  const userBioInputRef = useRef();
  const userProfileUrlInputRef = useRef();

  const clearFields = () => {
    userFirstNameInputRef.current.value = "";
    userUserNameInputRef.current.value = "";
    userBioInputRef.current.value = "";
    userProfileUrlInputRef.current.value = "";
  };

  const updateUserInfo = async (userData) => {
    console.log(userData);
    console.log(encodedToken);
    const response = await axios.post(
      "/api/users/edit",
      { userData },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    console.log(response);
    const updatedDetails = await response.data.user;
    console.log(updatedDetails);
    return updatedDetails;
  };

  const editProfileHandler = (e) => {
    e.preventDefault();

    const userData = {
      firstName: userFirstNameInputRef?.current?.value,
      username: userUserNameInputRef?.current?.value,
      bio: userBioInputRef?.current?.value,
      profileUrl: userProfileUrlInputRef?.current?.value,
    };
    updateUserInfo(userData)
      .then((data) => {
        console.log("updated user ", data);
        dispatch(updateUser(data));
        clearFields();
        dispatch(setAlert("Profile Updated", "success", id));
        setTimeout(() => dispatch(removeAlert(id)), 5000);
      })
      ?.catch((error) => {
        console.log(error.message);
        dispatch(setAlert(error.message, "error", id));
        setTimeout(() => dispatch(removeAlert(id)), 5000);
      });
  };

  return (
    <div className="edit-profile-component">
      <h2>Edit Profile</h2>
      <Box>
        <form className="edit-profile-component-form m">
          <FormControl sx={{ m: 1 }}>
            <TextField
              inputRef={userFirstNameInputRef}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">First Name:</InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <TextField
              inputRef={userUserNameInputRef}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">User Name:</InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <TextField
              inputRef={userBioInputRef}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Bio:</InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <TextField
              inputRef={userProfileUrlInputRef}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Profile URL:</InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Button
            className="profile-button"
            onClick={(e) => editProfileHandler(e)}
          >
            {" "}
            Save{" "}
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default EditProfileComponent;
