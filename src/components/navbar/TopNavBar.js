import React from "react";
import Image from "next/image";
import expereLogo from "../../assets/logoStandard.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPen } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiNotificationLine } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

import profileImage from "../../assets/profileImage.png";

export default function TopNavBar() {
  return (
    <nav className="w-full bg-white py-1 drop-shadow fixed z-45">
      <div className="flex justify-between items-center my-6 mx-6">
        <div className="flex space-x-4 items-center">
          <div className="">
            <RxHamburgerMenu className="w-6 h-6 xl:hidden cursor-pointer " />
          </div>
          <div className="">
            <Image
              src={expereLogo}
              alt="expere logo"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </div>
        </div >
        <div className="w-full max-w-2xl hidden xl:block">
          <form action="">
            <div className=" relative flex items-center text-gray-400 focus-within:text-gray-600">
              <IoIosSearch className="w-6 h-6 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="Search for tags, people, articles, and many more"
                autoComplete="off"
                aria-label="Search for tags, people, articles, and many more"
                className="bg-[#F8FAFC] w-full pr-3 pl-12 py-3 font-semibold placeholder-gray-400 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </form>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="hidden md:block">
            <div className="bg-[#2563EB] rounded-full flex items-center space-x-3 px-1 py-2">
              <button className=" text-xl text-white font-bold flex items-center">
                <FaPen className="text-white cursor-pointer mx-2 w-4 h-4" />
                Write
              </button>
              <p className="text-blue-200">|</p>
              <IoMdArrowDropdown className="text-white text-xl cursor-pointer" />
            </div>
          </div>
          <div className="">
            <BiNetworkChart className="w-6 h-6 cursor-pointer hidden md:block" />
          </div>
          <div className="">
            <MdOutlineDarkMode className="w-8 h-8 md:w-6 md:h-6 cursor-pointer" />
          </div>
          <div className="">
            <RiNotificationLine className="w-6 h-6 cursor-pointer hidden lg:block" />
          </div>
          <div className="">
            <Image
              src={profileImage}
              alt="profile picture"
              width={100}
              height={100}
              className="rounded-full w-10 h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
