import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  allPosts: [],
  userPosts: []
}

const postsSlice = createSlice({
  name: 'post', 
  initialState, 
  reducers: {
    addAllPosts: (state, action)=> {
      state.allPosts= action.payload;
    },
  }
})

export const { addAllPosts, sortByLikes } = postsSlice.actions;

const postsReducer = postsSlice.reducer;

export default postsReducer