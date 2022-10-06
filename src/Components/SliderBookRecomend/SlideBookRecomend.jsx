import React from "react";
import Slider from "react-slick";
import imgbook from "./../../img/bia_motcuonsachbuoncuoi_infinal_thanh_ly.jpg";
const SlideBookRecomend = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-full">
      <div className="container -mx-auto">
        <h1 class=" text-[17px] font-bold uppercase mt-[1px] pt-[15px] pl-[15px] pb-4">
          Có Thể Bạn Sẽ Thích
        </h1>
        <Slider {...settings}>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
          <div className="relative px-[10px]">
            <img src={imgbook} className="max-h-[190px]" />
            <div className="absolute w-10 h-10 flex items-center justify-center right-[10px] top-[10px] bg-[#F7941E] rounded-[20px]">
              <p className="text-white text-base">50%</p>
            </div>
            <div>
              <h2 className="text-sm leading-6 overflow-hidden ">
                Vui Vẻ Không Quạu Nha 2 - Một Cuốn Sách Buồn… Cười
              </h2>
              <p className=" text-[#C92127] font-semibold leading-[1.65rem] text-[14.5px]">
                39.500 đ
              </p>
              <del className="text-[13px] text-[#888888]">79.500 đ</del>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlideBookRecomend;
