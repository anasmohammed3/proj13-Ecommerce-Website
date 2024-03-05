import React from "react";
import { BrowserRouter as Router  , Routes , Route } from "react-router-dom";
import Navbar1 from "./components/nav.js";
import Shop from "./components/shop.js";
import SignUp from "./components/sign up.js";
import Login from "./components/login.js";
import AllProducts from "./components/allProducts.js";
import Me from "./components/me.js";
import ShoppingCart from "./components/Shopping Cart.js";
import Favorites from "./components/fovarite.js";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";

const App=() =>(
  
  <CartProvider>
  <Router>

 
    <Navbar1 />
    

    <Routes>
    <Route path="/" element={<Shop />} />
    <Route path="/products/all-products" element={<AllProducts />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<Login />} />
    <Route path="/me" element={< Me/>} />
    <Route path="/cart" element={< ShoppingCart/>} />
    <Route path="/fov" element={< Favorites/>} />
  </Routes>

    




  </Router>

</CartProvider>

)

export default App;

