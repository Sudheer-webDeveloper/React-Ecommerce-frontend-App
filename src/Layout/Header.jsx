import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import { PiMoonStarsFill } from "react-icons/pi";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItemWhislist } from "../Components/features/cart/cartSlice";
import { addItem } from "../Components/features/cart/cartSlice";
import img from "../Assets/hamburger.png";
import { toggleDarkMode } from "../Components/features/darkmode/darkSlice";
import logo from "../Assets/logo.png";
import Form from "../Components/Form/Form";

const Header = () => {
  //---->
  console.log("toggledarkmode", toggleDarkMode);
  const { darkmode } = useSelector((state) => state.dark);

  // console.log("darkmode", darkmode);
  //----->

  //
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  //

  //
  const [wish, setWish] = useState(false);
  const { amount, whishlist } = useSelector((store) => store.cart);
  // console.log(whishlist);

  const [form, setForm] = useState(false);

  return (
    <header>
      <nav className={`${state ? "for-nav" : "nav"} `}>
        {/* ${keep ? 'random8' : ''} */}
        <div className="f-1">
          <div className="main-f-1">
            <div className="icon">
              <h4 className="logo-1">
                <img src={logo} alt="Logo" />
              </h4>
            </div>
      
            <div className="link">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "navlink" : "normal"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "navlink" : "normal"
                    }
                  >
                    Products
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="f1-btn">
            <button onClick={() => setState(!state)}>
              <img src={img} alt="Menu" />
            </button>
          </div>
        </div>

        <div className="m-1">
        </div>
        <div className="L-1">
          <ul>
            <li className="dark-1">
              <button onClick={() => dispatch(toggleDarkMode())}>
                {JSON.parse(localStorage.getItem("darkmode")) ? (
                  <FaSun style={{ color: "yellow" }} />
                ) : (
                  <PiMoonStarsFill />
                )}
              </button>
            </li>

            {/* <li>
              <CiSearch className="search" />
            </li>
            <li>
              <IoMdContact className="contact" />
            </li> */}
            <li className="btn-1">
              <button onClick={() => setWish(!wish)}>
                <AiOutlineHeart className="heart" />
                <h5>{whishlist.length}</h5>
              </button>
            </li>
            <li className="cart-1">
              <NavLink to="/cart">
                <button>
                  <BsCart2 className="cart" />
                  <h4 className="unique-1">{amount}</h4>
                </button>
              </NavLink>
            </li>
            <li className="login">
              <button className="login-1" onClick={() => setForm(!form)}>
                Log In
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {wish && (
        <main
          className={`${whishlist.length <= 0 ? "main-whishlist" : "main-1"}`}
        >
          {whishlist.map((item) => {
            const { id, img, brand, category, price, type } = item;
            return (
              <div key={id} className="whislist-1">
                <div className="whishlist-img-1">
                  <img src={img} alt="Item_image" />
                </div>
                <div className="whislist-text-1">
                  <h2>{type}</h2>
                  <h3>{brand}</h3>
                  <div className="whishlist-delete-1">
                    <h1>₹{price}</h1>
                    <button onClick={() => dispatch(removeItemWhislist(id))}>
                      <AiOutlineDelete />
                    </button>
                  </div>
                  <button onClick={() => dispatch(addItem(item))}>
                    Add To cart
                  </button>
                </div>
              </div>
            );
          })}
        </main>
      )}

      {form && (
        <div className="form-1">
          <Form />
        </div>
      )}
    </header>
  );
};

export default Header;
