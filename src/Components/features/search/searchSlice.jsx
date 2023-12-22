import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";

const initialState = {
  searchTerm: "",
  searchResults:products,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

// console.log(searchSlice.actions)
export const { setSearchTerm,setSearchResults} = searchSlice.actions;
export default searchSlice.reducer;
