import React from "react";
import Footer from "../Footer";
import Header from "../header/Header";

const DefaultLayout = ({component: Component}) => {
  return (
    <div>
      <Header />
      <Component />
      <Footer />{" "}
    </div>
  );
};

export default DefaultLayout;
