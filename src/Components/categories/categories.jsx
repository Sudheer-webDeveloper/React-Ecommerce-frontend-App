import React from "react";
import { categories } from "../data";
import { NavLink } from "react-router-dom";


const Categories = () => {
  return (
    <div className="main-category-5">
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "" : "normal")}
      >
        <h1>Categories</h1>
        <div className="categories-5">
          
          <div className="row-5" >
            <div className="c5">
              <img src={categories[2]} alt="" />
              <button>Sale</button>
            </div>
            <div className="c5">
              <img src={categories[0]} alt="" />

              <button>women</button>
            </div>
          </div>


          <div className="rows-5">
            <div className="c5">
              <img src={categories[4]} alt="Fashion"/>
              <button>New Season</button>
            </div>
          </div>


          <div className="rower-5">
            <div className="image-5" >
              <div className="c5">
                <img src={categories[3]} alt="" />
                <button>Men</button>
              </div>
              <div className="c5">
                <img src={categories[1]} alt="" />
                <button>Accessiories</button>
              </div>
            </div>

            <div className="c5" initial={{x:200}}>
              <img src={categories[5]} alt="" />
              <button>shoes</button>
            </div>
          </div>


        </div>
      </NavLink>
    </div>
  );
};

export default Categories;
