import { createSlice } from "@reduxjs/toolkit";

const gbtSlice = createSlice({
  name: "gbt",
  initialState: {
    showGbtSearch: false,
  },
  reducers: {
    toggleGbtSearchView: (state, action) => {
      state.showGbtSearch = action.payload;
    },
  },
});
export const { toggleGbtSearchView } = gbtSlice.actions;
export default gbtSlice.reducer;
