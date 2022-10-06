import React from "react";
import {
  IoIosHeartEmpty,
  IoIosHelpCircleOutline,
  IoIosPhonePortrait,
  IoMdPin,
} from "react-icons/io";
import { BiUser, BiHeart, BiMap, BiShoppingBag } from "react-icons/bi";

const Header_NavBar = () => {
  return (
    <div className="w-full border-[#eae8e4] border-[1px]">
      <div className="container flex m-auto justify-between">
        <div className=" flex justify-between">
          <div className="flex items-center py-2 pr-4 hover:text-[#f75454]">
            <IoIosHelpCircleOutline className="text-2xl hover:text-[#f75454]" />
            Chúng tôi có thể giúp bạn không?
          </div>
          <div className="flex items-center py-2 px-4 hover:text-[#f75454]">
            <IoIosPhonePortrait className="text-2xl" />
            +84 039-2714-445
          </div>
        </div>
        <div className=" flex text-2xl  ">
          <div className="py-2 px-4 hover:text-[#f75454]">
            <BiMap />
          </div>
          <div className="py-2 px-4 hover:text-[#f75454]">
            <BiHeart />
          </div>
          <div className="py-2 px-4 hover:text-[#f75454]">
            <BiUser />
          </div>
          <div className="py-2 px-4 hover:text-[#f75454]">
            <BiShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_NavBar;
