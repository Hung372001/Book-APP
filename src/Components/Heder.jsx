import React, { Fragment } from "react";
import "./style.css";
import { Menu, Transition } from "@headlessui/react";
import {
  IoIosSearch,
  IoMdArrowDropdown,
  IoMdCloudUpload,
} from "react-icons/io";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Heder = () => {
  return (
    <div className="w-full relative border-b border-[#eae8e4]">
      <div className="container flex m-auto items-center">
        <div class="logo-holder logo-7 mr-14 ">
          <a href="">
            <i class="fas fa-book-open"></i>
            <div class="left">
              <h3>Nhóm 13</h3>
              <p></p>
            </div>
          </a>
        </div>
        <div className="px-4 text-base flex items-center flex-1">
          <Menu as="div" className="relative inline-block text-left z-50">
            <Menu.Button className="flex items-center hover:text-[#f30b0b]">
              {" "}
              Thể Loại <IoMdArrowDropdown size="1rem" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-[#f30b0b]"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Kiến thức khoa học
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-[#f30b0b]"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Văn học
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-[#f30b0b]"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Truyện tranh
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-[#f30b0b]"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Tiểu thuyết
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className=" flex items-center">
          <div className="py-3 px-4 bg-[#f6f5f3] border-[#f6f5f3]">
            <IoIosSearch className="text-2xl  text-black" />
          </div>
          <input
            type="text"
            className="border-[#f6f5f3] border-x text-[#7c6e65] bg-[#f6f5f3] py-3 px-4 text-[0.875rem] leading-normal font-normal w-96 focus:outline-none	"
            placeholder="Tìm Kiếm ..."
          />
        </div>
      </div>
    </div>
  );
};

export default Heder;
