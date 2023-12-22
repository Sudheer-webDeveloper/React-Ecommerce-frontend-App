import img1 from "../Assets/slider4.jpeg";
import img2 from "../Assets/slider2.jpeg";
import img3 from "../Assets/slider3.jpeg";
import img4 from "../Assets/slider.jpeg";

import img5 from "../Assets/lt-5.webp";
import img6 from "../Assets/lt-3.avif";
import img7 from "../Assets/lt-4.webp";
import img8 from "../Assets/featured3.png";
import img9 from "../Assets/featured1.png";
import img10 from "../Assets/featured2.png";
import img11 from "../Assets/featured4.png";
import img12 from "../Assets/fp4.avif";

import img13 from "../Assets/c-3.jpeg";
import img14 from "../Assets/c-33.webp";
import img15 from "../Assets/c-3.webP";
import img16 from "../Assets/c4a.webp";
import img17 from "../Assets/c-5.webp";
import img18 from "../Assets/cshoe.webp";

import img19 from "../Assets/sp-1.webp";
import img20 from "../Assets/sp-12.webp";
import img21 from "../Assets/sp13.webp";
import img22 from "../Assets/sp-14.webp";
import img23 from "../Assets/sp-15.webp";
import img24 from "../Assets/s-41.webp";
import img25 from "../Assets/s-42.webp";
import img26 from "../Assets/s-43.webp";
import img27 from "../Assets/s-44.webp";
import img28 from "../Assets/s-45.webp";
import img29 from "../Assets/s-31.webp";
import img30 from "../Assets/s-32.webp";
import img31 from "../Assets/s-33.webp";
import img32 from "../Assets/s-34.webp";
import img33 from "../Assets/s-35.webp";
import img34 from "../Assets/s-21.webp";
import img35 from "../Assets/s-22.webp";
import img36 from "../Assets/s-23.webp";
import img37 from "../Assets/s-24.webp";
import img38 from "../Assets/s-25.webp";

import img39 from "../Assets/p1.webp";
import img40 from "../Assets/p2.webp";
import img41 from "../Assets/p3.webp";
import img42 from "../Assets/p4.webp";
import img43 from "../Assets/p5.webp";
import img44 from "../Assets/p6.webp";
import img45 from "../Assets/p7.webp";
import img46 from "../Assets/p8.webp";
import img47 from "../Assets/p9.webp";
import img48 from "../Assets/p10.webp";
import img49 from  "../Assets/shoecategory1.png"
import img50 from  "../Assets/shoecategory2.png"

export const images = [img1, img2, img3, img4]; // slider
export const categories = [img13, img14, img15, img16, img17, img18]; // categories

//----------------- for featured Products and single product ------------------------- //
export const featured = [
  {
    id: 0,
    img1: img5,
    img2: img6,
    type: "Long Half Sleeve T-shirt",
    oldPrice: 500,
    category: "men",
    isNew: true,
    currentPrice: 400,
    quantity:1,
    tryingImg: [img19, img20, img21, img22, img23],
    desc: "Step into the limelight with this stunning and glamorous ensemble. This fashion-forward outfit effortlessly combines sophistication and trendiness. The bold and vibrant colors create a captivating visual appeal, while the sleek and tailored silhouette flatters your figure. ",
    size:''

  },
  {
    id: 1,
    img1: img7,
    img2: img8,
    isNew: true,
    type: "Stylish Rugged Shirt",
    oldPrice: 800,
    category: "men",
    currentPrice: 600,
    quantity:1,
    tryingImg: [img34, img35, img36, img37, img38],
    desc: "Step into the limelight with this stunning and glamorous ensemble. This fashion-forward outfit effortlessly combines sophistication and trendiness. The bold and vibrant colors create a captivating visual appeal, while the sleek and tailored silhouette flatters your figure. ",
    size:''

  },
  {
    id: 2,
    img1: img11,
    img2: img12,
    type: "stylish Sleeve Caargo",
    oldPrice: 900,
    category: "men",
    currentPrice: 700,
    quantity:1,
    tryingImg: [img29, img30, img31, img32, img33],
    desc: "Step into the limelight with this stunning and glamorous ensemble. This fashion-forward outfit effortlessly combines sophistication and trendiness. The bold and vibrant colors create a captivating visual appeal, while the sleek and tailored silhouette flatters your figure. ",
    size:''

  },
  {
    id: 3,
    img1: img9,
    img2: img10,
    type: "Red Marron T-shirt",
    oldPrice: 600,
    category: "women",
    currentPrice: 500,
    quantity:1,
    tryingImg: [img24, img25, img26, img27, img28],
    desc: "Step into the limelight with this stunning and glamorous ensemble. This fashion-forward outfit effortlessly combines sophistication and trendiness. The bold and vibrant colors create a captivating visual appeal, while the sleek and tailored silhouette flatters your figure. ",
    size:''

  },
];

//----------------- for featured Products and single product ------------------------- //

export const products = [
  {
    id: 4,
    img: img39,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "sale",
    price: 500,
    oversized: true,
    cotton: true,
    //
    img1: img39,
    size:'',
    currentPrice:500,
    quantity:1,

  },
  {
    id: 5,
    img: img40,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "sale",
    price: 600,
    oversized: true,
    cotton: true,
    img1: img40,
    size:'',
    currentPrice:600,
    quantity:1,
  },
  {
    id: 6,
    img: img41,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "men",
    price: 700,
    oversized: false,
    cotton: false,
    img1: img41,
    size:'',
    currentPrice:700,
    quantity:1,
  },
  {
    id: 7,
    img: img42,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "men",
    price: 500,
    oversized: false,
    cotton: false,
    img1: img42,
    size:'',
    currentPrice:500,
    quantity:1,
  },
  {
    id: 8,
    img: img43,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "newSeason",
    price: 600,
    oversized: true,
    cotton: true,
    img1: img43,
    size:'',
    currentPrice:600,
    quantity:1,
  },
  {
    id: 9,
    img: img44,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "newSeason",
    price: 700,
    oversized: true,
    cotton: true,
    img1: img44,
    size:'',
    currentPrice:700,
    quantity:1,
  },
  {
    id: 10,
    img: img45,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "men",
    price: 500,
    oversized: true,
    cotton: false,
    img1: img45,
    size:'',
    currentPrice:500,
    quantity:1,
  },
  {
    id:11,
    img: img46,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "accessiories",
    price: 600,
    oversized: true,
    cotton: true,
    img1: img46,
    size:'',
    currentPrice:600,
    quantity:1,
  },
  {
    id: 12,
    img: img47,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "accessiories",
    price: 700,
    oversized: true,
    cotton: false,
    img1: img47,
    size:'',
    currentPrice:700,
    quantity:1,
  },
  {
    id: 13,
    img: img49,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "shoes",
    price: 500,
    oversized: true,
    cotton: true,
    img1: img48,
    size:'',
    currentPrice:500,
    quantity:1,
  },
  {
    id: 14,
    img: img18,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "shoes",
    price: 500,
    oversized: true,
    cotton: true,
    img1: img5,
    size:'',
    currentPrice:500,
    quantity:1,
  },
  {
    id: 15,
    img: img6,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "accessiories",
    price: 500,
    oversized: true,
    cotton: true,
    img1: img6,
    size:'',
    currentPrice:500,
    quantity:1,
  },
  {
    id: 16,
    img: img12,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "men",
    price: 600,
    oversized: true,
    cotton: true,
    img1: img12,
    size:'',
    currentPrice:600,
    quantity:1,
  },
  {
    id: 17,
    img: img7,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "sale",
    price: 900,
    oversized: true,
    cotton: true,
    img1: img7,
    size:'',
    currentPrice:900,
    quantity:1,
  },
  {
    id: 18,
    img: img8,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "women",
    price: 400,
    oversized: true,
    cotton: true,
    img1: img8,
    size:'',
    currentPrice:500,
    quantity:1,
  },
  {
    id: 19,
    img: img9,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "women",
    price: 800,
    oversized: true,
    cotton: true,
    img1: img9,
    size:'',
    currentPrice:500,
    quantity:1,
  },
  {
    id: 20,
    img: img50,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "shoes",
    price: 300,
    oversized: true,
    cotton: true,
    img1: img10,
    size:'',
    currentPrice:300,
    quantity:1,
  },
  {
    id: 21,
    img: img11,
    brand: "Fashion Store",
    type: "Long Half Sleeve T-shirt",
    category: "newSeason",
    price: 350,
    oversized: true,
    cotton: true,
    img1: img11,
    size:'',
    currentPrice:350,
    quantity:1,
  },
];
