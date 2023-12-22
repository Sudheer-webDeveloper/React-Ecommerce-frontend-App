import React from "react";

const AsideCategory = ({ categories, filteringItems}) => {
  return (
    <div className="category-7">
      <h2>Filters </h2>
      <div className="button-7">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <button onClick={()=> filteringItems(category)}>{category}</button>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AsideCategory;
