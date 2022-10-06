import React from "react";
import Features from "../Components/Features/Features";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import ListNewReleases from "../Components/ListNewReleases/ListNewReleases";
import NominationsBook from "../Components/CateGoryBook/CateGoryBook";
import FeaturesItem from "./../Components/FeaturesItem/FeaturesItem";
import CateGoryBook from "../Components/CateGoryBook/CateGoryBook";
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Features />

      <ListNewReleases />
      <CateGoryBook />
    </div>
  );
};

export default Home;
