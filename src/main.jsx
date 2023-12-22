import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./store.jsx";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
  </React.StrictMode>
);

// To apply dark mode using Redux to the entire application in a function without using classes or constructors, you can follow these steps:

// Step 1: Create a new slice for the dark mode in your Redux store.

// ```javascript
// const darkModeSlice = createSlice({
//   name: "darkMode",
//   initialState: false, // Initialize the dark mode state as false (light mode)
//   reducers: {
//     toggleDarkMode: (state) => {
//       return !state;
//     },
//   },
// });
// ```

// Step 2: Add the dark mode slice to your Redux store.

// ```javascript
// const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//     darkMode: darkModeSlice.reducer,
//   },
// });
// ```

// Step 3: Create a function component that wraps your entire application and connects it to the Redux store.

// ```javascript
// import { useDispatch, useSelector } from "react-redux";
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
// ```

// Step 4: Create CSS styles for the dark mode.

// ```css
// .dark-mode {
//   background-color: #333;
//   color: #fff;
// }

// .light-mode {
//   background-color: #fff;
//   color: #333;
// }
// ```

// In the above code, we are using the `useDispatch` and `useSelector` hooks from react-redux to dispatch actions and access the dark mode state, respectively.

// When the "Toggle Dark Mode" button is clicked, it dispatches the `toggleDarkMode` action, which updates the dark mode state in the Redux store.

// The `darkMode` state is then used to conditionally apply the "dark-mode" or "light-mode" CSS classes to the root element of your application, allowing you to style the components accordingly.

// Remember to import the necessary dependencies, such as `useDispatch`, `useSelector`, and `toggleDarkMode`, in the App component.

// Please note that this solution assumes you have already set up your Redux store and wrapped your application with a Redux provider.
