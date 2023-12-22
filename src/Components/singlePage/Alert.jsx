import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlertFunc } from "../features/cart/cartSlice";
import { BsFillCartPlusFill, BsCartDashFill } from "react-icons/bs";

const Alert = () => {
  const { show, type, msg } = useSelector((state) => state.cart.alert);
  console.log(show, type, msg);

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const howMuchTime = setTimeout(() => {
      dispatch(showAlertFunc({ show: false }));
    }, 900);

    return () => clearTimeout(howMuchTime);
  }, [cartItems]);

  return (
    <div className="alert-container-10">
      <div className={`alert-10 ${type}`}>
        <h4>{msg}</h4>
        <h3>
          {/* {type === 'success' ? <BsFillCartPlusFill /> : <BsCartDashFill />} */}
          {type === "success" && <BsFillCartPlusFill />}
          {type === 'danger' && <BsCartDashFill />}
          {type === 'add-10' && <BsFillCartPlusFill />} 
        </h3>
      </div>
    </div>
  );
};

export default Alert;
