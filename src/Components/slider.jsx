import React, { useState } from "react";
import { images } from "./data";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import img from '../Assets/shoe4.webp'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
  };
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
  };




  return (
    <div className="slider-3">
      <div
        className="mainslider-3"
        style={{ transform: `translate(-${currentSlide * 100}vw)` }}
      >
        <div className="img-slider-3">
          <div className="text-3">
               <h1>
               Style speaks volumes, fashion is self-expression unleashed
               </h1>
               <p>The new collection by the fashion Everyone's Store has taken the industry by storm, with its captivating designs and exquisite craftsmanship. Fashion enthusiasts are quickly embracing the latest trends</p>
               <button>
                Explore Now
               </button>
          </div>
          <div className="image-3"
         
          
          >
              <img src={img} alt="Shoe_image" />
          </div>
        </div>
        <img src={images[1]} alt="image2" />
        <img src={images[2]} alt="image3" />
        <img src={images[0]} alt="image4" />
      </div>

      <div className="arrow-3">
        <button type="button" className="right-3" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </button>
        <button className="left-3">
          <AiOutlineArrowLeft onClick={prevSlide} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
