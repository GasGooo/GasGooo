import React from "react";
import { Button } from "@mui/material";
import axios from "axios"
import "./home.css"
import Footer from "../footer/footer";
import Wavee from "../wave/wave";
import About from "../about/about";
import Contacts from "../contacts/contacts";


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
        mb: 15,
        }} className="home-btn item" variant="contained" href="/register" >Join GasGoo</Button>
    </div>
    <About />
    <Contacts />
    <Footer />
    <Wavee />
    </>
    
  );
}
