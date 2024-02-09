import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import moviesReducer from "./moviesSlice";

const persistedAuth = JSON.parse(localStorage.getItem("authUser"));

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
  preloadedState: {
    auth: persistedAuth || null,
  },
});

export default appStore;
