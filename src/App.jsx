import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import PlaceOrder from "./Pages/PlaceOrder";
import Product from "./Pages/Product";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Navbar/Search";
import AddProduct from "./components/admin/AddProduct";
import ShopcontextProvider from "./components/context/ShopContext";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <BrowserRouter>
          <ShopcontextProvider>
            <ToastContainer />
            <Navbar />
            <Search />
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/place-prder" element={<PlaceOrder />} />
              <Route path=".order" element={<Orders />} />
            </Routes>
            <Footer />
          </ShopcontextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
