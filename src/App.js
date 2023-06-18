import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@mui/material";
import axios from "axios"
import Wave from 'react-wavify'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion, useSpring, useScroll } from "framer-motion"
import Login from "./components/login/login";
import Home from "./components/home/home";
import Register from "./components/register/register";
import Cursor from "./components/cursor/cursor";
import Contact from "./components/contacts/contacts";
import Checkout from "./components/checkout/checkout";
import Copyright from "./components/copyright/copyright";

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
    <div className="">
    <Cursor />

    <Parallax pages={5}>
        <ParallaxLayer speed={1}>
          <Home />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.7}>
          <Login />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.7}>
          <Register />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.7}>
          <Checkout />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.7}>
          <Contact />
          <Copyright sx={{ mt: 5 }} />
        </ParallaxLayer>

      </Parallax>
    </div>

  );
}
