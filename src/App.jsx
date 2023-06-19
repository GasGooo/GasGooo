import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion, useSpring, useScroll } from "framer-motion"
import Login from "./components/login/login";
import Home from "./components/home/home";
import Cursor from "./components/cursor/cursor";
import NoPage from "./components/NoPage/NoPage";
import Register from "./components/register/register";
import Checkout from "./components/checkout/checkout";

export default function App() {
  // const [message, setMessage] = useState("");
  // function getToken() {
  //   axios.get("http://gasgoo.onrender.com",  { crossdomain: true }).then(response => {
  //     setText(response.data.text);
  //     setAuthor(response.data.author);
  //   });
  // }

  return (
  <div className="container">
    <Cursor />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </div>    
  );
}
