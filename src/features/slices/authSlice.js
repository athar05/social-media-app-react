import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("auth_token")
    ? localStorage.getItem("auth_token")
    : null,
  isAuthenticated: localStorage.getItem("auth_token") ? true : false,
  user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const { user } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
    },
    signIn: (state, action) => {
      const { user } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateUser: (state, action) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});

export const { signUp, signIn, signOut, updateUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
