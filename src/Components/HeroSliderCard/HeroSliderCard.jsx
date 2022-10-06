import React from "react";
import imgSlider from "./../../img/img2.png";

const HeroSliderCard = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div className="w-full grid grid-cols-2 h-[500px]">
      <div class="">
        <p className="text-[#beb4b4] font-bold uppercase">{data.edition}</p>
        <h2>
          <span className="font-normal text-[3.125rem] ">{data.title}</span>
          <br />
          <span className="font-bold text-[3.125rem]">{data.month}</span>
        </h2>

        <p className="text-[.875rem] font-bold text-[#7c6e65]">{data.decs}</p>
        <p className="text-[1.625rem] font-medium text-[#f75454] mb-[8px]">
          {data.priceDiscount}
        </p>
        <button className="py-[0.75rem] px-12 bg-black text-white">
          Shop Now
        </button>
      </div>

      <div>
        <img src={data.img} />
      </div>
    </div>
  );
};

export default HeroSliderCard;
