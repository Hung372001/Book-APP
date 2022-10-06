import React from "react";
import imgbook from "./../../img/8935270703783.jpg";

const BookCateGorys = () => {
  return (
    <div>
      <div class="p-[8px] flex w-[369px] border-2 border-[#eae8e4]">
        <img src={imgbook} className="w-[174px] h-[174px]" />
        <div>
          <h2 className="text-[16px] text-[#333333] hover:text-[#f75454]">
            Tủ Sách Đời Người: Không Gia Đình
          </h2>
          <div className="flex">
            <p className="text-[1.65rem] text-[#C92127] font-semibold">
              296.670 đ
            </p>
            <p className="bg-[#C92127] text-white text-[1rem] font-semibold py-[3px] px-[4px] ml-[8px]">
              7%
            </p>
          </div>
          <del>319.000 đ</del>
        </div>
      </div>
    </div>
  );
};

export default BookCateGorys;
