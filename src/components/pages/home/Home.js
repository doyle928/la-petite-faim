import React from "react";
import "./Home.css";
import Slideshow from "./components/Slideshow";
import History from "./components/History";
import SlideshowMini from "./components/SlideshowMini";
import Shop from "./components/Shop";
import Discover from "./components/Discover";
import ParticleEffect from "./components/ParticleEffect";
import { useWindowSize } from "./../../../hooks/useWindowSize";

function Home() {
  const size = useWindowSize();
  const styles = {
    particleStyle: {
      position: "absolute",
      top: 74,
      left: `50%`,
      transform: `translatex(-50%)`,
      width: `80%`,
      height: `${size.width / 1.5}px`,
      zIndex: 0
    }
  };
  return (
    <div className="body-container">
      <Slideshow />
      <History />
      <SlideshowMini />
      <Shop />
      <Discover />
      <div
        className="home-body-particle-container"
        style={styles.particleStyle}
      >
        <ParticleEffect />
      </div>
    </div>
  );
}

export default Home;
