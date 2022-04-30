import React from "react";
import Slides from "../../Components/reactCarousel/ReactCarousel";
import Blog from "./Blog";
import img from "./csr.jpg";
const detail = [
  {
    header: "CSR Policy",
    image: img,
  },
];
const CSRPolicy = () => {
  return (
    <div>
      <Slides data={detail} />
      <Blog />
    </div>
  );
};

export default CSRPolicy;
