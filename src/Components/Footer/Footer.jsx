import React from "react";
import "./../style.css";

import { AiFillYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import Momo from "./../../img/momopay.png";
import Vnpay from "./../../img/vnpay_logo.png";
import Shoppepay from "./../../img/shopeepay_logo1.png";
import ZaloPay from "./../../img/ZaloPay-logo-130x83.png";
import Moca from "./../../img/logo_moca_120.jpg";
import GiaoHangNhanh from "./../../img/icon_giao_hang_nhanh1.png";
import Snappy from "./../../img/icon_snappy1.png";
import Ahamove from "./../../img/ahamove_logo3.png";
import VnPost from "./../../img/vnpost1.png";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="container  m-auto flex justify-between">
        <div className="justify-start">
          <div className="logo-holder logo-7 mb-8">
            <a href="">
              <i class="fas fa-book-open"></i>
              <div class="left">
                <h3>Nhóm 13</h3>
              </div>
            </a>
          </div>
          <div className="pb-10">
            <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>
          </div>
          <div className="mb-6">
            <p className="pb-1 hover:text-[#f75454]">viethung@shopbook.com</p>
            <p className="hover:text-[#f75454]">+84 039-2714-445</p>
          </div>
          <div className="flex justify-between text-2xl">
            <GrFacebookOption className="hover:text-[#f75454]" />
            <RiInstagramLine className="hover:text-[#f75454]" />
            <BsPinterest className="hover:text-[#f75454]" />
            <AiFillYoutube className="hover:text-[#f75454]" />
          </div>
        </div>
        <div>
          <h4 className="font-medium text-lg text-[#232f3e] flex items mb-8">
            Thể Loại
          </h4>
          <ul>
            <li className="hover:text-[#f75454] py-2">Truyên Tranh</li>
            <li className="hover:text-[#f75454] py-2">Tiểu Thuyết</li>
            <li className="hover:text-[#f75454] py-2">Văn học</li>
            <li className="hover:text-[#f75454] py-2">Khoa Học</li>
            <li className="hover:text-[#f75454] py-2">Truyên Tranh</li>
            <li className="hover:text-[#f75454] py-2">Kinh nghiệm sông</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-lg text-[#232f3e] flex items mb-8">
            Hỗ trợ
          </h4>
          <ul>
            <li className="hover:text-[#f75454] py-2">
              Chính sách đổi - trả - hoàn tiền{" "}
            </li>
            <li className="hover:text-[#f75454] py-2">
              Chính sách bảo hành - bồi hoàn
            </li>
            <li className="hover:text-[#f75454] py-2">Chính sách vận chuyển</li>
            <li className="hover:text-[#f75454] py-2">Khoa Học</li>
            <li className="hover:text-[#f75454] py-2">Chính sách khách sỉ</li>
            <li className="hover:text-[#f75454] py-2">
              Phương thức thanh toán và xuất HĐ
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-lg text-[#232f3e] flex items mb-8">
            Dịch Vụ
          </h4>
          <ul>
            <li className="hover:text-[#f75454] py-2">Điều khoản sử dụng</li>
            <li className="hover:text-[#f75454] py-2">
              Chính sách bảo mật thông tin cá nhân
            </li>
            <li className="hover:text-[#f75454] py-2">
              Chính sách bảo mật thanh toán
            </li>
            <li className="hover:text-[#f75454] py-2">
              Hệ thống trung tâm - nhà sách
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className=" container m-auto  ">
          <div className="grid  grid-cols-4 h-[80px]  mt-[10px] gap-[25px]">
            <div className="m-auto">
              <img src={GiaoHangNhanh} width="150px" />
            </div>
            <div className="m-auto">
              <img src={Snappy} width="150px" />
            </div>
            <div className="m-auto">
              <img src={Ahamove} width="160px" />
            </div>
            <div className="m-auto">
              <img src={VnPost} width="100px" />
            </div>
          </div>
          <div className="grid  grid-cols-5 h-[80px]  mt-[10px] gap-[25px]">
            <div className="m-auto">
              <img src={Momo} className="h-[50px]" />
            </div>
            <div className="m-auto">
              <img src={Shoppepay} className="h-[44px]" />
            </div>
            <div className="m-auto">
              <img src={ZaloPay} className="max-w-[120px]" />
            </div>
            <div className="m-auto">
              <img src={Vnpay} className="max-w-[120px]" />
            </div>
            <div className="m-auto">
              <img src={Moca} className="h-[65px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
