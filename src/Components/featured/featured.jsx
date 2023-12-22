import React from "react";
import { featured } from "../data";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Featured = ({ type }) => {



  return (
    <main>
      <div className="featured-4">
        <div className="title-4">
          <h1>{type}</h1>
        </div>
        <div className="animatingContainer">
          <motion.div 
            className="flex-4"
            initial={{
              scale:0,
            }}
            whileInView={{
               scale:1
            }}

            transition={{
              type:"spring",
              damping:20
            }}
          >
            {featured.map((product) => {
              const { img1, img2, id, type, oldPrice, currentPrice, isNew } =
                product;

              return (
                <div className="card-container-4" key={id} >
                  <NavLink
                    to={`/featured/${id}`}
                    className={({ isActive }) => (isActive ? "" : "normal")}
                  >
                    <div className="card-4">
                      <div className="image-4">
                        <img src={img1} alt="product-image" className="img1" />
                        <img src={img2} alt="product-image" className="img2" />
                        {isNew && (
                          <span className="span-4">new collection</span>
                        )}
                      </div>
                      <h2>{type}</h2>
                      <div className="text-4">
                        <h3 className="strike-4"> ₹{oldPrice}</h3>
                        <h3 className="current-4"> ₹{currentPrice}</h3>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Featured;
