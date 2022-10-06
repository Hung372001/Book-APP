import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSliderCard from "../HeroSliderCard/HeroSliderCard";
import data from "./../../data/data";
import Slider from "react-slick";
const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-full bg-main h-auto  pt-24 pb-8 pl-[4.5rem] pr-[4.5rem]">
      <Slider {...settings}>
        {data.map((item, key) => (
          <HeroSliderCard data={item} />
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
