import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cameraImage: null,
  chatView: null,
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetCameraImage: (state) => {
      state.cameraImage = null;
    },
    setChatView: (state, action) =>{
      state.chatView = action.payload;
    },
    resetChatView: (state)=>{
      state.chatView = null
    }
  },
});

export const { setCameraImage, resetCameraImage,setChatView, resetChatView  } = cameraSlice.actions;

export const selectCameraImage = (state) => state.camera.cameraImage;
export const selectChatView = (state) => state.camera.chatView;

export default cameraSlice.reducer;
