import React from "react";
import { Button } from "@mui/material";
import axios from "axios"
import "./home.css"
import Footer from "../footer/footer";
import Wavee from "../wave/wave";


export default function Home() {
  return (
    <>
    <div className="container">
      <div className="title item">GasGoo🔥</div>
      <div className="subtitle item">the fuel made easier.</div>
      <Button sx={{
        backgroundColor: '#8BACAA',
        ":hover": {
          backgroundColor: '#E76161',
        },
        }} className="home-btn item" variant="contained" href="/register" >Join GasGoo</Button>
    </div>
    <Footer />
    <Wavee />
    </>
    
  );
}
