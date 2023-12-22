import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./Components/features/cart/cartSlice";
import darkReducer from './Components/features/darkmode/darkSlice'
import searchReducer from "./Components/features/search/searchSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    dark:darkReducer,
    search: searchReducer,
  },
});

export default Store;
