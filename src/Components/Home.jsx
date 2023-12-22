import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "./slider";
import Featured from "./featured/featured";
import Categories from "./categories/categories";
import Contact from "./contact/contact";

const Home = () => {
  return (
    <div className="Main-home">
        <Slider />
      <section >
        <Featured type="Featured" />
      </section>
      <section >
        <Categories />
      </section>
      <section>
        <Featured type="Trending" />
      </section>
        <Contact />

    </div>
  );
};

export default Home;
