import React, { useRef, useState } from "react";
import "./createpost.css";
import { Avatar, Button } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { useDispatch } from "react-redux";
import { setAlert } from "../../features/slices/alertSlice";
import { removeAlert } from "../../features/slices/alertSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useAddPostMutation } from "../../services/extendedApi";
import Alerts from "../Alerts";

const TweetBox = () => {
  const emojiData = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "🥲",
    "😊",
    "😇",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😭",
    "😮‍💨",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🥶",
  ];

  const dispatch = useDispatch();
  const id = nanoid();

  const userInfo = localStorage.getItem("user");
  const [emojiComponent, setEmojiComponent] = useState(false);
  const imageUploadRef = useRef(null);
  const [uploadImage, setUploadImage] = useState(null);
  // console.log(userInfo)
  const { firstName, lastName } = JSON.parse(userInfo);
  // console.log(firstName, lastName)
  const postTextInputRef = useRef();

  const [addPost] = useAddPostMutation();

  const submitHandler = async (e) => {
    let postText = postTextInputRef.current.value;
    e.preventDefault();
    if (postText || uploadImage) {
      let newPost = {
        comments: [],
        content: postText || null,
        image: uploadImage || null,
        firstname: firstName,
        lastname: lastName,
      };

      await addPost(newPost);
      setUploadImage(() => null);
      dispatch(setAlert("Your post has been added", "success", id));
      setTimeout(() => dispatch(removeAlert(id), 5000));
    }
    clearFields();
  };

  const clearFields = () => {
    postTextInputRef.current.value = "";
  };

  const emojiHandler = () => {
    setEmojiComponent((prevState) => !prevState);
  };

  const addEmoji = (emo) => {
    postTextInputRef.current.value = `${postTextInputRef.current.value} ${emo}`;
  };

  const clickHandler = (event) => {
    imageUploadRef.current.click();
  };

  const imageUploadChangeHandler = (event) => {
    setUploadImage(() => URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="tweet-box">
      <form onSubmit={submitHandler}>
        <div className="tweet-box-input">
          <Avatar src="../images/user.jpg" />
          <textarea
            placeholder="Create a post..."
            type="text"
            maxLength="200"
            ref={postTextInputRef}
          />
        </div>
        {uploadImage && (
          <div className="image-uploaded m">
            <p className="p">Image Uploaded</p>
          </div>
        )}
        <div className="tweet-box-utilities">
          <div className="tweet-box-utilities-left">
            <ImageOutlinedIcon id="upload-img-post" onClick={clickHandler} />
            <input
              type="file"
              style={{ display: "none" }}
              ref={imageUploadRef}
              onChange={imageUploadChangeHandler}
            />
            <EmojiEmotionsOutlinedIcon onClick={emojiHandler} />
          </div>
          <Button type="submit" variant="outlined" className="tweet-box-button">
            Post
          </Button>
        </div>
      </form>
      {emojiComponent && (
        <div className="emoji-component m">
          {emojiData.map((emo) => {
            return (
              <span className="emoji" onClick={() => addEmoji(emo)} key={emo}>
                {emo}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TweetBox;
