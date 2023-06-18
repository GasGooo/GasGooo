import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Button } from "@mui/material";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion, useSpring, useScroll } from "framer-motion"
import Login from "./components/login/login";
import Home from "./components/home/home";
import Cursor from "./components/cursor/cursor";
import NoPage from "./components/NoPage/NoPage";
import About from "./components/about/about";
import Contact from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Register from "./components/register/register";


export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      <Route path="*" element={<NoPage />} />
    </Routes>
  </div>    
  );
}
