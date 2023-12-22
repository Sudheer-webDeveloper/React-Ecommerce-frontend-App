import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { featured } from "../data";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, showAlertFunc } from "../features/cart/cartSlice";
import Alert from "./Alert";

const SinglePage = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const setSize = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (selectedSize) {
      dispatch(addItem(single));
      dispatch(
        showAlertFunc({
          show: true,
          type: "success",
          msg: "cart updted Successfully",
        })
      );
    } else {
      dispatch(
        showAlertFunc({
          show: true,
          type: "",
          msg: "Please Select the size",
        })
      );
    }
  };

  const { alert } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const params = useParams();
  console.log(params.id);
  const [single, setSingle] = useState(featured[params.id]);
  console.log(single);
  const [image, setImage] = useState(0);

  return (
    <div className="mainer-8">
      {alert.show && <Alert />}
      <main className="main-8">
        <div className="single-first-8">
          <div className="image-8">
            <img src={single.tryingImg[image]} alt="main_image" />
          </div>
          <div className="image-second-8">
            {single.tryingImg.map((img, index) => (
              <div
                key={index}
                className={`${image === index ? "random-8" : ""}`}
              >
                <img src={img} alt="" onClick={() => setImage(index)} />
              </div>
            ))}
          </div>
        </div>
        <div className="single-second-8">
          <div className="first-8">
            <h2 style={{ fontWeight: "600", letterSpacing: "1px" }}>
              {single.type}
            </h2>
            <h2>
              {" "}
              ₹{single.oldPrice} - ₹{single.currentPrice}
            </h2>
            <p>{single.desc.substring(0, 300)}</p>
          </div>

          <div className="second-8">
            <h2>colors</h2>
            <div className="color-8">
              <div className="circle">1</div>
              <div className="circle">2</div>
              <div className="circle">3</div>
            </div>
          </div>

          <div className="size-8">
            <h2>size</h2>
            <div className="button-8">
              <button
                onClick={() => {
                  setSize("S");
                  single.size = "S";
                }}
              >
                S
              </button>
              <button
                onClick={() => {
                  setSize("M");
                  single.size = "M";
                }}
              >
                M
              </button>
              <button
                onClick={() => {
                  setSize("L");
                  single.size = "L";
                }}
              >
                L
              </button>
              <button
                onClick={() => {
                  setSize("XL");
                  single.size = 'XL'
                }}
              >
                XL
              </button>
            </div>
          </div>

          <div className="amount-8">
            <div className="cart-8">
              <button type="button" onClick={addToCart}>
                Add to Cart <BsCart2 className="icon-8" />
              </button>
            </div>
          </div>

          <div className="text-8">
            <div>
              <h2>Brand</h2>
              <hr />
              <p>Everyone's Store</p>
            </div>
            <div>
              <h2>categories</h2>
              <hr />
              <p>{single.category}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SinglePage;

//${keep ? 'random8' : ''}

//here when user clcking on the buttton add to cart in singlePage component the items are pushing multiple times into the cartItems [ ] but i don't want that if the item is already there in the cartItems i don't want to push again that item to avoid this bug what i have to do

// {/* <div className={`${image === 0 ? "random-8" : ""}`}>
{
  /* <img src={single.tryingImg[0]} alt="" onClick={() => setImage(0)} />
</div>

<div className={`${image === 1 ? "random-8" : ""}`}>
  <img src={single.tryingImg[1]} alt="" onClick={() => setImage(1)} />
</div>

<div className={`${image === 2 ? "random-8" : ""}`}>
  <img src={single.tryingImg[2]} alt="" onClick={() => setImage(2)} />
</div>

<div className={`${image === 3 ? "random-8" : ""}`}>
  <img src={single.tryingImg[3]} alt="" onClick={() => setImage(3)} />
</div>

<div className={`${image === 4 ? "random-8" : ""}`}>
  <img src={single.tryingImg[4]} alt="" onClick={() => setImage(4)} />
</div> */
}

// --------------------------------  THIS IS THE LOGIC TO UNTILUNLESS THE USER SELECTS THE SIZE THE SINGLE WILL NOT DISPATCH TO THE CATT ITEMS -----//

// import React, { useState } from "react";

// const SinglePageComponent = () => {
//   const [selectedSize, setSelectedSize] = useState(null);

//   const setSize = (size) => {
//     setSelectedSize(size);
//   };

//   const addToCart = () => {
//     if (selectedSize) {
//       dispatch(addItem(single));
//       dispatch(
//         showAlertFunc({
//           show: true,
//           type: "success",
//           msg: "Cart updated successfully",
//         })
//       );
//     } else {
//       dispatch(
//         showAlertFunc({
//           show: true,
//           type: "error",
//           msg: "Please select a size before adding to cart",
//         })
//       );
//     }
//   };

//   return (
//     <div>
//       <div className="size-8">
//         <h2>size</h2>
//         <div className="button-8">
//           <button onClick={() => setSize("S")}>S</button>
//           <button onClick={() => setSize("M")}>M</button>
//           <button onClick={() => setSize("L")}>L</button>
//           <button onClick={() => setSize("XL")}>XL</button>
//         </div>
//       </div>

//       <div className="amount-8">
//         <div className="buttons-8">
//           <button>-</button>
//           <h2>0</h2>
//           <button>+</button>
//         </div>

//         <div className="cart-8">
//           <button type="button" onClick={addToCart}>
//             Add to Cart <BsCart2 className="icon-8" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePageComponent;
