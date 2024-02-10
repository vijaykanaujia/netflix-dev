import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import moviesReducer from "./moviesSlice";
import gbtReducer from "./gbtSlice";
import configReducer from "./configSlice";

const persistedAuth = JSON.parse(localStorage.getItem("authUser"));

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    gbt: gbtReducer,
    config: configReducer,
  },
  preloadedState: {
    auth: persistedAuth || null,
  },
});

export default appStore;
