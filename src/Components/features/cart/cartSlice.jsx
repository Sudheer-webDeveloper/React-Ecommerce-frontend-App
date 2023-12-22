import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: JSON.parse(localStorage.getItem("newCartItems")) || [],
  total: 0,
  amount: 0,
  alert: { show: false, msg: "", type: "" },
  whishlist: JSON.parse(localStorage.getItem("whishlist")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showAlertFunc: (state, action) => {
      const { show, type, msg } = action.payload;   //  this the way we have to acsess the payload when we have multiple arguments passing from the dunction , , we have to create an object to access those values 
      
      state.alert = { show, type, msg }; // {show:show, type:type, msg:msg} // from the action.payload we are acsessing these item
      // console.log("action.payload",action.payload)
    },

    addItem: (state, action) => {
      const newItem = {
        ...action.payload,
      };
      const exsistingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      // here i am comparing the cartitem id and newItemid if it is equal means then it is a exsisting item right , if both are not same then it is a new item right that's it.

      if (exsistingItem) {
        console.log("item already there in cart");
        return;
      }
      state.cartItems = [...state.cartItems, newItem];
      localStorage.setItem("newCartItems", JSON.stringify(state.cartItems));
      if (state.cartItems) {  // this if else is optional for or understanding
        // console.log(state.cartItems);
        console.log("we did it");
      } else {
        // console.log("we have to do it again");
      }
    },
    removeAllItems: (state, action) => {
      state.cartItems = [];
      localStorage.removeItem("newCartItems");
      // when ever i am emptying my cart at the same time i am emptying my localStorage otherWise , if we don't empty the localStorage again the items are coming when refreshing or opening the app .. once comment this line and see then you will understand what I am telling
    },

    removeingSingleItem: (state, action) => {
      const itemId = action.payload;

      const updatedItems = state.cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem("newCartItems", JSON.stringify(updatedItems)); // here at the same time we are upadating localstorage , as well as the state.cartItems

      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      // console.log(action);
    },

    increase: (state, action) => {
      // const itemId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity = cartItem.quantity + 1;
    },

    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculatingTotal: (state, action) => {
      let total = 0;
      let amount = 0;
      // console.log(total);

      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.currentPrice * item.quantity;
        // console.log(item.currentPrice, item.quantity);
      });
      state.total = total;
      state.amount = amount;
      // console.log(total);
    },
    addItemToWhisList: (state, action) => {
      const NewWhisListItem = action.payload;
      const exsistingItem = state.whishlist.find(
        (item) => item.id === NewWhisListItem.id
      );
      if (exsistingItem) {
        console.log("i am form whishlist");
        return;
      }
      state.whishlist = [...state.whishlist, NewWhisListItem];
      localStorage.setItem("whishlist", JSON.stringify(state.whishlist));
      // console.log(state.whishlist);
    },
    removeItemWhislist: (state, action) => {
      const itemId = action.payload;
      const updatingWhishlist = state.whishlist.filter(
        (item) => item.id !== itemId
      );
      localStorage.setItem("whishlist", JSON.stringify(updatingWhishlist));
      state.whishlist = state.whishlist.filter((item) => item.id !== itemId);
    },
  },
});
// console.log(cartSlice.actions)
export const {
  addItem,
  removeAllItems,
  removeingSingleItem,
  increase,
  decrease,
  calculatingTotal,
  showAlertFunc,
  addItemToWhisList,
  removeItemWhislist,
} = cartSlice.actions;
export default cartSlice.reducer;

//state.alert = { show: true, msg: "Item Added", type: "success" };

// about uuid and v4 and keys in a react
// import { v4 as uuidv4 } from "uuid";

//The line import { v4 as uuidv4 } from 'uuid'; imports the v4 function from the uuid package. uuid is a package that provides a way to generate universally unique identifiers (UUIDs).
// A UUID is a unique identifier that is generated in such a way that it is extremely unlikely to collide with another UUID. It is commonly used to assign unique identifiers to objects or items, such as in databases or when generating unique keys for React components.
// In the specific case of the code I provided, uuidv4 is a function from the uuid package that generates a version 4 UUID. Version 4 UUIDs are generated using random numbers, making them suitable for generating unique keys for items in an array.
// By using uuidv4() to generate a unique ID for each item in the cart, you ensure that each item has a unique key. This is important because React uses these keys to efficiently update and render elements in lists. Having duplicate keys can lead to incorrect rendering and performance issues.

// Overall, using a library like uuid and generating unique IDs for items helps avoid key collisions and ensures the stability and efficiency of React components.

// const initialState = {
//   cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
//   total: 0,
//   amount: 9,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const newItem = {
//         ...action.payload,
//         id: uuidv4(),
//       };
//       state.cartItems = [...state.cartItems, newItem];
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//       if (state.cartItems) {
//         console.log(state.cartItems);
//         console.log("we did it");
//       } else {
//         console.log("we have to do it again");
//       }
//     },
//   },
// });

// main updated code in this we are using the uuid  because it always geneerates the unique id for every cartItem when user clicking on the button which is there in the singlepage compoent but we want like this if the item is already exsisted in the cartItems we dont want to push that why we removed the uuid in our updated code
// const initialState = {
//   cartItems:JSON.parse(localStorage.getItem("newCartItems")) || [],
//   total: 0,
//   amount: 9,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const newItem = {
//         ...action.payload
//       };
//       const exsistingItem = state.cartItems.find(
//         (item) => item.id === newItem.id
//       );
//       // here i am comparing the cartitem id and newItemid if it is equal means then it is a exsisting item right , if both are not same then it is a new item right that's it.

//       if (exsistingItem) {
//         console.log("item there");
//         return;
//       }
//       state.cartItems = [...state.cartItems, newItem];
//        localStorage.setItem("newCartItems", JSON.stringify(state.cartItems));
//       if (state.cartItems) {
//         console.log(state.cartItems);
//         console.log("we did it");
//       } else {
//         console.log("we have to do it again");
//       }
//     },
//   },
// });

// export const { addItem } = cartSlice.actions;
// export default cartSlice.reducer;

//for alert

// No, the way you have updated the properties in the `alert` object of the `cartSlice` is incorrect. The `reducers` object in `createSlice` expects functions as its values, and those functions should take two arguments: `state` and `action`.

// In your case, the `showAlertFunc` function should be defined separately and should take `state` and `action` as arguments, like this:

// ```javascript
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     showAlertFunc: (state, action) => {
//       const { type, msg } = action.payload;
//       state.alert = { show: true, type, msg };
//     },
//     // other reducer functions
//   },
// });
// ```

// To dispatch this `showAlertFunc` action, you should pass an object with `type` and `payload` properties to the `dispatch` function. For example:

// ```javascript
// dispatch(cartSlice.actions.showAlertFunc({ type: "success", msg: "Cart updated successfully" }));
// ```

// This will update the `alert` object in the state with the provided `type` and `msg` values, and set `show` to `true`.
