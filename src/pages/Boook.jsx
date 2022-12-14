import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "./../img/BannerBlock09_VanHoc_350x415.jpg";
import dataimg from "./../data/img";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlusSmall } from "react-icons/go";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Tabs, ThemeProvider } from "@mui/material";
import "./Book-style.css";
import ContentBook from "../Components/ContentBookl/ContentBook";
import ComentReview from "../Components/CommentReview/ComentReview";
import SlideBookRecomend from "../Components/SliderBookRecomend/SlideBookRecomend";
const Boook = () => {
  const [value, setValue] = useState("1");
  const [numbervalue, setValueNumber] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeUp = () => {
    let number = 0;
    number = numbervalue;
    number += 1;
    setValueNumber(number);
  };
  const handChangedDown = () => {
    console.log(123);
    let number = 0;
    number = numbervalue;
    number -= 1;
    setValueNumber(number);
  };
  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoPlay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#f8f6f0]">
      <div className="container m-auto pt-4 pb-[25px] px-4 bg-white h-[1000px] flex flex-col">
        <div className="flex mb-[150px] w-[73%] mx-auto">
          <div className="w-[400px] h-[400px] p-4  justify-center items-center">
            <Slider {...settings}>
              {dataimg.map((item) => (
                <img
                  src={item}
                  className="max-h-[392px] max-w-full w-auto h-auto"
                />
              ))}
            </Slider>
            <div className="flex justify-between gap-3 mt-6">
              <button className=" text-[#C92127] border-2 border-[#C92127] bg-white h-[44px] w-[220px] flex items-center justify-center rounded-lg">
                <MdOutlineAddShoppingCart />
                <p>Th??m v??o gi??? h??ng</p>
              </button>

              <button className=" text-white border-none bg-[#C92127] h-[44px] w-[220px] rounded-lg">
                Mua Ngay
              </button>
            </div>
          </div>
          <div className="  mt-[9px] ml-9">
            <h3 className="text-3xl font-semibold pb-4">
              Th??i L?????i L???m, Nay Ngh??? L??m!
            </h3>
            <div className=" flex">
              <span className="pr-[5px]">Nh?? xu???t b???n:</span>
              <span className="font-semibold">D??n Tr??</span>
            </div>
            <div className=" flex">
              <span className="pr-[5px]">H??nh th???c b??a:</span>
              <span className="font-semibold"> B??a M???m</span>
            </div>
            <div className=" flex">
              <span className="pr-[5px]">T??c gi???:</span>
              <span className="font-semibold">BTEDL team</span>
            </div>
            <div className="flex items-center gap-4 pt-2 pb-4">
              <h1 className="text-[32px] text-[#C92127] font-bold">74.000??</h1>
              <del className="ml-[8px] text-base text-[#0D0E0F] ml-[5px ]">
                99.000 ??{" "}
              </del>
              <p className="p-[4px] bg-[#C92127] text-white text-base font-semibold rounded-lg">
                25%
              </p>
            </div>
            <div className="flex">
              <p className="max-w-[200px] min-w-[150px]">Ch??nh s??ch ?????i tr???</p>
              <p> ?????i tr??? s???n ph???m trong 30 ng??y</p>
            </div>
            <div className="flex py-2">
              <div className="max-w-[200px] min-w-[150px]"> S??? L?????ng :</div>
              <div className="flex items-center">
                <button
                  className="h-14 border-[1px] border-2 border-r-0 h-[30px] pl-[16px] pr-[8px]"
                  onClick={handChangedDown}
                >
                  <AiOutlineMinus />
                </button>
                <input
                  type="text"
                  className="  border-[1px]  border-x-0 w-12 text-center h-[30px]"
                  value={numbervalue}
                />
                <button
                  className=" border-[1px]  border-2 border-l-0 h-[30px] pl-[8px] pr-[16px]"
                  onClick={handleChangeUp}
                >
                  <GoPlusSmall />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value} className="border-none">
            <Box sx={{ borderBottom: 1, borderColor: "white" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="primary tabs example"
                centered
              >
                <Tab
                  label="N???i Dung S??ch
"
                  value="1"
                />
                <Tab label="B??nh Lu???n" value="2" />
              </Tabs>
            </Box>
            <TabPanel value="1">
              <ContentBook />
            </TabPanel>
            <TabPanel value="2">
              <ComentReview />
            </TabPanel>
          </TabContext>
        </Box>
        <SlideBookRecomend />
      </div>
    </div>
  );
};

export default Boook;
