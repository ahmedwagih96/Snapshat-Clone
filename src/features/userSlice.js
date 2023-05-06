import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        username: action.payload.displayName,
        profilePic: action.payload.photoURL,
        id: action.payload.uid
      };
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectedUser = (state) => state.user.user;

export default userSlice.reducer;
