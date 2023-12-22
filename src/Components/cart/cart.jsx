import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  removeAllItems,
  removeingSingleItem,
  increase,
  decrease,
  showAlertFunc,
} from "../features/cart/cartSlice";
import img from "../../Assets/emptycart.webp";
import { NavLink } from "react-router-dom";
import Alert from "../singlePage/Alert";

const Cart = () => {
  const dispatch = useDispatch();
  const { show, type, msg } = useSelector((store) => store.cart.alert);
  const { cartItems, total } = useSelector((store) => {
    return store.cart;
  });
  console.log(cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="h1-9">
        <img src={img} alt="Cart is Empty" />
        {show && <Alert />}
        <NavLink to="/">
          <button>Continue Shooping</button>
        </NavLink>
      </div>
    );
  }

  return (
    <main className="main-cart-9">
      {show && <Alert />}
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex-9">
              <div className="image-9">
                <img src={item.img1} alt={item.type} />
                <h2>{item.type}</h2>
                <h3>
                  size -{item.size}{" "}
                  <button
                    onClick={() => {
                      dispatch(removeingSingleItem(item.id));
                      dispatch(
                        showAlertFunc({
                          show: true,
                          type: "danger",
                          msg: "Item Deleted",
                        })
                      );
                    }}
                  >
                    remove
                  </button>
                </h3>
              </div>

              <div className="text-9">
                <h2>price</h2>
                <h3>₹{item.currentPrice}</h3>
              </div>

              <div className="quantity-9">
                <h2>Quantity</h2>
                <div className="button-9">
                  <button
                    onClick={() => {
                      if (item.quantity === 1) {
                        dispatch(
                          showAlertFunc({
                            show: true,
                            type: "danger",
                            msg: "Items Deleted",
                          })
                        );
                        dispatch(removeingSingleItem(item.id));
                        return;
                      }
                      dispatch(
                        showAlertFunc({
                          show: true,
                          type: "danger",
                          msg: "Amount Updated",
                        })
                      );
                      dispatch(decrease(item.id));
                    }}
                  >
                    -
                  </button>
                  <h3>{item.quantity}</h3>
                  <button
                    onClick={() => {
                      dispatch(increase(item.id));
                      dispatch(
                        showAlertFunc({
                          show: true,
                          type: "add-10",
                          msg: "Amount Updated",
                        })
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="total-9">
                <h2>Total</h2>
                <h3>₹{item.currentPrice * item.quantity}</h3>
              </div>
            </div>
          </div>
        );
      })}
      <div className="main-total-9">
        <h2>Total</h2>
        <h3>₹{total}</h3>
      </div>
      <div className="clear-9">
        <button
          onClick={() => {
            dispatch(removeAllItems());
            dispatch(showAlertFunc({show:true,type:'danger',msg:'All items Deleted'}))
          }}
        >
          Clear Items
        </button>
      </div>
    </main>
  );
};

export default Cart;

// const [lister, setLister] = useState([]);
// useEffect(() => {
//   setLister(cartItems);
// }, [cartItems]);

// {cartItems.map((item) => {
//   return (
//     <div key={item.id}>
//       <h1>hello world</h1>
//       <img src={item.img1} alt="" />
//     </div>
//   );
// })}
