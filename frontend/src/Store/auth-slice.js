import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    user: null,
    token: null
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;
