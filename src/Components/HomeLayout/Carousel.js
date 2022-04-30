import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "./Components/C1.jpg";

const CarouselSection = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        showArrows={false}
      >
        <div className="carousel-innner">
          <img alt="Slide 1" src={Slide1} />
        </div>
        <div className="carousel-innner">
          <img alt="Slide 1" src={Slide1} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
