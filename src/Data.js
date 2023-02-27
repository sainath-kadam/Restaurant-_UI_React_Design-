import menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-2.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/pic-3.png";
import reviewImage2 from "./assets/images/pic-2.png";
import reviewImage3 from "./assets/images/pic-1.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";
const menu = [
  {
    img: menuImage1,
    price: '$20',
    title: 'burger'
  },
  {
    img: menuImage2,
    price: '$22',
    title: 'testy stick'
  },
  {
    img: menuImage3,
    price: '$23',
    title: 'C65'
  },
  {
    img: menuImage4,
    price: '$24',
    title: 'Pizza'
  },
  {
    img: menuImage5,
    price: '$20',
    title: 'juice '
  },
  {
    img: menuImage6,
    price: '$24',
    title: 'Coffee'
  },
];

const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  },
];

const product = [
  {
    img: productImage1,
    title:'Burger',
    price:'$18'
  },
  {
    img: productImage2,
    title:'Special Pizza',
    price:'$20'
  },
  {
    img: productImage3,
    title:'Ice Cram',
    price:'$10'
  },
];
const review = [
  {
    img: reviewImage1,
    name:'shiva',
    rating:'fas fa-star'
  },
  {
    img: reviewImage2,
    name:'aji',
    rating:'fas fa-star'
  },
  {
    img: reviewImage3,
    name:'tejas',
    rating:'fas fa-star'
  },
];
const blog = [
  {
    img: blogImage1,
    title:"Spicy slice",
    disc: "Food is a vital source of energy and nutrients that our bodies require to function properly and maintain good health.",
    admin:"Sainath"
  },
  {
    img: blogImage2,
    title:"Bread omlete with Chese",
    disc: " The type and quality of food we consume can have a significant impact on our physical and mental well-being, as well as our risk",
    admin:"Sainath"
  },
  {
    img: blogImage3,
    title:"Juice",
    disc: " Food is important for providing energy and nutrients to our bodies, and the quality of our diet can impact our health and disease risk.",
    admin:"Sainath"
  },
];
export { menu, cart, product, review, blog };
