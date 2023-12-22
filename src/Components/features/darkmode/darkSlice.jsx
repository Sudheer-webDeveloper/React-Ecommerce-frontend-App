import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    darkmode:localStorage.getItem('darkmode') || false,
}





const darkSlice = createSlice({
    name:'darkmode',
    initialState,
    reducers:{
        toggleDarkMode:(state)=>{
            // console.log(state)
            state.darkmode = !state.darkmode
            localStorage.setItem('darkmode',state.darkmode)
            // console.log("hello darkmode" ,state.darkmode)
        }
    }
})

export const {toggleDarkMode} = darkSlice.actions;
export default darkSlice.reducer;













// const darkModeSlice = createSlice({
//     name: "darkMode",
//     initialState: false, // Initialize the dark mode state as false (light mode)
//     reducers: {
//       toggleDarkMode: (state) => {
//         return !state;
//       },
//     },
//   });
  
//   const store = configureStore({
//     reducer: {
//       cart: cartSlice.reducer,
//       darkMode: darkModeSlice.reducer,
//     },
//   });
  
//   import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "./redux/darkModeSlice";

// const App = () => {
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.darkMode);

//   const handleToggleDarkMode = () => {
//     dispatch(toggleDarkMode());
//   };

//   return (
//     <div className={darkMode ? "dark-mode" : "light-mode"}>
//       <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
//       {/* Your application components */}
//     </div>
//   );
// };

// export default App;
// .dark-mode {
//     background-color: #333;
//     color: #fff;
//   }
  
//   .light-mode {
//     background-color: #fff;
//     color: #333;
//   }
//   import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "./redux/darkModeSlice";
// import "./App.css";

// const App = () => {
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.darkMode);

//   const handleToggleDarkMode = () => {
//     dispatch(toggleDarkMode());
//   };

//   return (
//     <div className={darkMode ? "dark-mode" : "light-mode"}>
//       <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
//       {/* Your application components */}
//     </div>
//   );
// };

// export default App;
