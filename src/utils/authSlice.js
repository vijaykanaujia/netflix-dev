import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    addAuth: (state, action) => {
      localStorage.setItem("authUser", JSON.stringify(action.payload));
      return action.payload;
    },
    removeAuth: (state, action) => {
      localStorage.removeItem("authUser");
      return null;
    },
  },
});

export const { addAuth, removeAuth } = authSlice.actions;

export default authSlice.reducer;
