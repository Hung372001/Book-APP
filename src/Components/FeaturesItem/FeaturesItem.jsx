import React from "react";
import imgbook from "../../img/boolItem.jpg";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import "./style.css";
const FeaturesItem = (props) => {
  const item = props;
  const data = item.item;
  console.log(item);

  return (
    <div className="px-[30px]  p-[1.875rem] product border-r-[1px] hover:border-x-2 border-y-2  border-[#eae8e4] hover:border-black">
      <div className=" w-[209px] 2xl:w-[311px] h-[312px] relative">
        <div>
          <img src={data.img} className="m-auto m-1/2" />
        </div>
        <div className="pt-4 product__body bg-white h-[142px]">
          <div>
            <p className="text-xs text-[#f75454] mb-[0.75rem]">
              {data.edition}
            </p>
          </div>
          <h2 className="text-base h-12 overflow-hidden font-normal text-[#161619] mb-[.25rem]">
            {data.NameBook}
          </h2>
          <p className="text-[.875rem] mb-[.25rem]"> {data.author}</p>
          <span>{data.money}</span>
        </div>
        <div className="product__hover flex items-center">
          <div className="flex justify-between items-center">
            <span className=" mr-7 product__add-to-cart hover:text-[#f75454]">
              ADD TO CART
            </span>
            <a className="w-[2.1875rem] flex h-[2.1875rem] items-center rounded-full hover:bg-[#f75454] hover:text-white">
              <HiOutlineSwitchHorizontal className="items-center flex m-auto " />
            </a>
            <a className="w-[2.1875rem] flex h-[2.1875rem] items-center rounded-full hover:bg-[#f75454] hover:text-white">
              <BsHeart className="items-center flex m-auto " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesItem;
