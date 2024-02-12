import { createSlice } from "@reduxjs/toolkit";

const gbtSlice = createSlice({
  name: "gbt",
  initialState: {
    showGbtSearch: false,
    movieSearchResult: null,
    movieNames: null,
  },
  reducers: {
    toggleGbtSearchView: (state, action) => {
      state.showGbtSearch = action.payload;
    },
    addGbtMoviesResult: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieNames = movieName;
      state.movieSearchResult = movieResults;
    },
  },
});
export const { toggleGbtSearchView, addGbtMoviesResult } = gbtSlice.actions;
export default gbtSlice.reducer;
