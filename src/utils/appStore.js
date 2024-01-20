import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const persistedAuth = JSON.parse(localStorage.getItem("authUser"));

const appStore = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: persistedAuth || null,
  },
});

export default appStore;
