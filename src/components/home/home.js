import React from "react";
import { Button } from "@mui/material";
import axios from "axios"
import Wave from 'react-wavify'
import "./home.css"

export default function Home() {
 
  return (
    <div className="container">
    <div className="title">GasGoo🔥</div>
    <div className="subtitle">The fuel made easier</div>
    <Button className="home-btn" variant="contained" >Join GasGoo</Button>
    <Wave className="wave" fill='#FF3434'
        paused={false}
        options={{
          height: 10,
          amplitude: 50,
          speed: 0.18,
          points: 2
        }}
    />
    </div>
    
  );
}
