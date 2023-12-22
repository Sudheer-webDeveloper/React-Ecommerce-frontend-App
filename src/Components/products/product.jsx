import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import topImg from "../../Assets/asideImage.webp";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWhisList } from "../features/cart/cartSlice";

const Product = ({ items }) => {
  const dispatch = useDispatch()
  
  return (
    <div className="cards-7">
      <img src={topImg} alt="topImage" style={{ width: "100%" }} />
      <div className="flex-7">
        {items.map((item) => {
          const { id, img, brand, type, category, price, oversized, cotton } =
            item;
          return (
            <div className="card-7" key={id}>
              <div className="image-7">
                <img src={img} alt={category} />
                <button>{oversized ? "oversized" : "Slim fit"}</button>
              </div>
              <div className="text-7">
                <h2>
                  {brand}{" "}
                  <button onClick={()=>dispatch(addItemToWhisList(item))}>
                    <AiOutlineHeart className="heart-7"/>
                  </button>
                </h2>
                <p>{type}</p>
                <h3>₹{price} </h3>
                <div className="btn-7">
                  <button>{cotton ? "cotton" : "S-Fabric"}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
