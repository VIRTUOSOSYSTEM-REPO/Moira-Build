import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "./assets/C1.jpg";

const SingleCarousel = () => {
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
          <img alt="Slide1" src={Slide1} />
        </div>
      </Carousel>
    </div>
  );
};

export default SingleCarousel;
