import { Button } from "@mui/material";
import Cursor from "../cursor/cursor";
import Copyright from "../copyright/copyright";
import "./nopage.css"

export default function NoPage() {
 
  return (
  <div className="container">
    <Cursor />
    <div className="title">404 - Wrong page bro 😎</div>
    <div className="subtitle">See you soon... </div>
    <Button className="home-btn" variant="contained" href="/" 
    sx={{
        backgroundColor: '#8BACAA',
        ":hover": {
          backgroundColor: '#E76161',
        },
        }} 
        >GasGoo homepage</Button>
    <Copyright sx={{ mt: 5 }} />
  </div>
  );
}
