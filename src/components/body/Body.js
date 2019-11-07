import React from "react";
import "./Body.css";
import Slideshow from "./components/Slideshow";
import History from "./components/History";
import SlideshowMini from "./components/SlideshowMini";
import Shop from "./components/Shop";
import Discover from "./components/Discover";

function Body() {
  return (
    <div className="body-container">
      <Slideshow />
      <History />
      <SlideshowMini />
      <Shop />
      <Discover />
    </div>
  );
}

export default Body;
