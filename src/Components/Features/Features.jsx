import React from "react";
import { FaLifeRing, FaPiggyBank, FaShippingFast } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";
import { BiCreditCard } from "react-icons/bi";
import { MdLiveHelp } from "react-icons/md";

const Features = () => {
  return (
    <div className="w-full py-11 border-b-[1px] border-[#eae8e4]">
      <div className="container mx-auto">
        <ul className="flex items-center justify-around">
          <li>
            <div className="flex">
              <FaShippingFast className="text-5xl text-[#f75454]" />
              <div className="ml-6">
                <h4 className="text-[1.125rem] text-[#161619] font-semibold">
                  Free Ship
                </h4>
                <p>Bán Kính 20km</p>
              </div>
            </div>
          </li>
          <li className="border-l border-[#eae8e4] h-[80px]"></li>
          <li>
            <div className="flex">
              <FaLifeRing className="text-5xl text-[#f75454]" />
              <div className="ml-6">
                <h4 className="text-[1.125rem] text-[#161619] font-semibold">
                  Hoàn Tiền 100%
                </h4>
                <p>Hoàn tiền nếu sản phẩm có vấn đề</p>
              </div>
            </div>
          </li>
          <li className="border-l border-[#eae8e4] h-[80px]"></li>
          <li>
            <div className="flex">
              <BiCreditCard className="text-5xl text-[#f75454]" />
              <div className="ml-6">
                <h4 className="text-[1.125rem] text-[#161619] font-semibold">
                  Thanh toán an toàn
                </h4>
                <p> Thanh toán an toàn 100%</p>
              </div>
            </div>
          </li>
          <li className="border-l border-[#eae8e4] h-[80px]"></li>
          <li>
            <div className="flex">
              <MdLiveHelp className="text-5xl text-[#f75454]" />
              <div className="ml-6">
                <h4 className="text-[1.125rem] text-[#161619] font-semibold">
                  Hỗ Trợ 24/7
                </h4>
                <p></p>
              </div>
            </div>
          </li>
          <li className="border-l border-[#eae8e4] h-[80px]"></li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
