import React from "react";
import { Carousel } from "./carousel/Carousel";
import Casement from "./Casement/Casement";
import OurClients from "./Clients/OurClients";
import GetStarted from "./GetStarted/GetStarted";
import Premium from "./Premium/Premium";
import Sliding from "./Sliding/Sliding";
import Special from "./Special/Special";

const Home = () => {
  return (
    <div>
      <Carousel />
      <GetStarted />
      <OurClients />
      <Sliding />
      <Casement />
      <Special />
      <Premium />
    </div>
  );
};

export default Home;
