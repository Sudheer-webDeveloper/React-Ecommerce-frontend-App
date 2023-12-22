import "./App.css";
import "./Responsive.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Layout from "./Layout/Layout";
import Contact from "./Components/contact";
import SinglePage from "./Components/singlePage/SinglePage";
import Product from "./Components/products/products";
import Cart from "./Components/cart/cart";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { calculatingTotal } from "./Components/features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const {darkmode} = useSelector((state)=>state.dark)
  console.log("darkmode from app.js" ,darkmode)

  useEffect(() => {
    dispatch(calculatingTotal());
  }, [cartItems]);
  return (
    <div className={`${JSON.parse(localStorage.getItem('darkmode')) ? "dark-mode" : "light-mode"}`} >

      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/featured/:id" element={<SinglePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/products" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
