import React from "react";
import CarouselBox from "../Components/HomeC/CarouselBox";
import CardsBoxAbout from "../Components/HomeC/CardsBoxAbout";
import Divider from "../Components/Divider";
import CardBoxLights from "../Components/HomeC/CardsBoxLights";

type HomePropsType = { windowWidth: number };

const Home = ({ windowWidth }: HomePropsType) => {
  window.scrollTo(0, 0);
  return (
    <div>
      <CarouselBox windowWidth={windowWidth} />
      <CardsBoxAbout />
      <Divider />
      <CardBoxLights />
    </div>
  );
};

export default Home;
