import React from "react";
import { Banner } from "../../Components/base/Banner/Banner";
import GalleryList from "../../Components/base/GalleryList/GalleryList";
import { LayoutOne } from "../../Components/base/LayoutOne";
import LayoutWithSlide from "../../Components/base/LayoutWithSlide";
import Main from "../../Components/base/MainLayout/MainHeader";
import VerticalSlider from "../../Components/base/VerticalSlider/VerticalSlider";
import HomeLayout from "../../Components/HomeLayout";
import img from "./assets/company.jpg";
import ImageSection from "../../Home/ImageContent/index";

const OurCompany = () => {
  return (
    <div>
      <Banner title={"System"} description={"testing"} />
      {/* <HomeLayout /> */}
      {/* <VerticalSlider /> */}
      <LayoutWithSlide />
      <ImageSection />
    </div>
  );
};

export default OurCompany;
