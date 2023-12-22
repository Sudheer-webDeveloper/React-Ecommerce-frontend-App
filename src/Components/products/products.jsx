import React from "react";
import { useState } from "react";
import { products } from "../data";
import Product from "./product";
import AsideCategory from "./asideCategory";

const Products = () => {
  const allCategories = [
    "All Items",
    ...new Set(
      products.map((item) => {
        return item.category;
      })
    ),
  ];

  const filteringItems = (category) => {
    if (category === "All Items") {
      setProduct(products);
      return;
    }
    const newItems = products.filter((item) => {
      console.log(item.category);
      return item.category === category;
    });

    setProduct(newItems);
    console.log(newItems);
  };

  const [product, setProduct] = useState(products);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  return (
    <div className="container-7">
      <div className="product-7">
        <AsideCategory
          categories={categories}
          filteringItems={filteringItems}
        />
      </div>
      <aside className="aside-7">
        <Product items={product} />
      </aside>
    </div>
  );
};

export default Products;

// const [sortOrder, setSortOrder] = useState("");
// const handleSortOrderChange = (order) => {
//   setSortOrder(order);
// };

// const sortedProducts = [...products];

// if (sortOrder === "Low-high") {
//   sortedProducts.sort((a, b) => a.price - b.price);
//   console.log(sortedProducts.sort((a, b) => a.price - b.price));
// } else if (sortOrder === "High-Low") {
//   sortedProducts.sort((a, b) => b.price - a.price);
//   console.log(sortedProducts.sort((a, b) => b.price - a.price));
// }

// To achieve the functionality where specific items appear based on the user's selection of sorting by low to high or high to low, you can follow these steps:
// 1. Add a state variable to your component to keep track of the sorting preference. For example:

// ```javascript
// const [sortOrder, setSortOrder] = useState(""); // Possible values: "lowToHigh", "highToLow"
// ```

// 2. Create a function that handles the sorting order change when the user clicks the sorting buttons. For example:

// ```javascript
// const handleSortOrderChange = (order) => {
//   setSortOrder(order);
// };
// ```

// 3. Use the `.sort()` method to sort the `featured` array based on the sort order selected by the user. Inside your component, map over the sorted array to display the relevant items. For example:

// ```javascript
// const sortedFeatured = [...featured]; // Create a copy of the featured array

// if (sortOrder === "lowToHigh") {
//   sortedFeatured.sort((a, b) => a.currentPrice - b.currentPrice);
// } else if (sortOrder === "highToLow") {
//   sortedFeatured.sort((a, b) => b.currentPrice - a.currentPrice);
// }

// sortedFeatured.map((product) => (
//   // Render the product components here
// ));
// ```

// 4. Implement buttons or any UI elements that allow the user to change the sorting order. For example:

// ```javascript
// <button onClick={() => handleSortOrderChange("lowToHigh")}>Low to High</button>
// <button onClick={() => handleSortOrderChange("highToLow")}>High to Low</button>
// ```

// When the user clicks the "Low to High" button, the `handleSortOrderChange` function is called with the "lowToHigh" argument, which updates the `sortOrder` state variable. As a result, the `sortedFeatured` array is sorted based on the selected order, and the relevant items are displayed.

// Similarly, you can implement the "High to Low" button to change the sorting order accordingly.

// Note: The code provided assumes you are working with React and JSX syntax. Adjust the implementation according to your specific programming language or framework.
