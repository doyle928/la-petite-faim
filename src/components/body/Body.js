import React from "react";
import "./Body.css";
import Slideshow from "./components/Slideshow";
import History from "./components/History";
import SlideshowMini from "./components/SlideshowMini";

function Body() {
  return (
    <div className="body-container">
      <Slideshow />
      <History />
      <SlideshowMini />
    </div>
  );
}

export default Body;
