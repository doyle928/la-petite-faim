import React from "react";
import "./Slideshow.css";
import picture1 from "../../../../styles/images/body/slideshow/slideshow-1.png";
import picture2 from "../../../../styles/images/body/slideshow/slideshow-2.png";
import picture3 from "../../../../styles/images/body/slideshow/slideshow-3.png";
import picture4 from "../../../../styles/images/body/slideshow/slideshow-4.png";
import picture5 from "../../../../styles/images/body/slideshow/slideshow-5.png";
import picture6 from "../../../../styles/images/body/slideshow/slideshow-6.png";
import picture7 from "../../../../styles/images/body/slideshow/slideshow-7.png";
import picture8 from "../../../../styles/images/body/slideshow/slideshow-8.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slideshow = () => {
  return (
    <div className="slideshow-container">
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={picture1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={picture2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={picture3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={picture4} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={picture5} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={picture6} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={picture7} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={picture8} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slideshow;
