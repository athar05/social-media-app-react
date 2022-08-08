import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  allPosts: [],
  userPosts: [],
  bookmarkedPosts: [],
}

const postsSlice = createSlice({
  name: 'post', 
  initialState, 
  reducers: {
    addAllPosts: (state, action)=> {
      state.allPosts= action.payload;
    }
  }
})

export const { addAllPosts } = postsSlice.actions;

const postsReducer = postsSlice.reducer;

export default postsSlice