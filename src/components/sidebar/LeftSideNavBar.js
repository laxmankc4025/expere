import React from "react";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineFeed } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { AiOutlineRight } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";

export default function LeftSideNavBar() {
  return (
    <div className="bg-white rounded-xl p-5 flex flex-col space-y-8 drop-shadow-lg">
      <div className="flex flex-col space-y-4 px-2 ">
        <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
          <div className="flex text-blue-700 cursor-pointer">
            <MdOutlineFeed className="w-6 h-6" />
            <p className="px-6 font-semibold"> My Feed</p>
          </div>
        </div>
        <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
          <div className="flex text-slate-600 cursor-pointer">
            <MdOutlineExplore className="w-6 h-6" />
            <p className="px-6 font-semibold"> Explore</p>
          </div>
        </div>
        <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
          <div className="flex text-slate-600 cursor-pointer">
            <RiDraftLine className="w-6 h-6" />
            <p className="px-6 font-semibold"> Drafts</p>
          </div>
        </div>
        <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
          <div className="flex text-slate-600 cursor-pointer">
            <BiBookBookmark className="w-6 h-6" />
            <p className="px-6 font-semibold"> Bookmarks</p>
          </div>
        </div>
        <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
          <div className="flex text-slate-600 cursor-pointer">
            <FaLaptopCode className="w-6 h-6" />
            <p className="px-6 font-semibold"> Hackathons</p>
          </div>
        </div>
        <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
          <div className="flex text-slate-600 cursor-pointer">
            <AiOutlineDoubleRight className="w-6 h-6" />
            <p className="px-6 font-semibold"> More</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <hr className="py-2" />
        <div className="text-slate-800 flex space-x-8 items-center">
          <p className="font-semibold text-lg">Trending Tags</p>
          <SlGraph className="w-6 h-6" />
        </div>
        <div className="flex flex-col space-y-2 ">
          <p className="font-medium text-slate-600 cursor-pointer hover:bg-slate-50 hover:rounded-md hover:p-1">
            JavaScript
          </p>
          <p className="font-medium text-slate-600 cursor-pointer hover:bg-slate-50 hover:rounded-md hover:p-1">
            React
          </p>
          <p className="font-medium text-slate-600 cursor-pointer hover:bg-slate-50 hover:rounded-md hover:p-1">
            Ruby on rails
          </p>
          <p className="font-medium text-slate-600 cursor-pointer hover:bg-slate-50 hover:rounded-md hover:p-1">
            NextJS
          </p>
          <p className="font-medium text-slate-600 cursor-pointer hover:bg-slate-50 hover:rounded-md hover:p-1">
            UI/UX
          </p>
          <div className="flex text-slate-900 items-center space-x-2 cursor-pointer hover:bg-slate-50 hover:rounded-md hover:p-1">
            <p className="font-medium ">See all</p>
            <AiOutlineRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-2 text-slate-700">
        <BsTwitter className="w-8 h-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-md duration-300" />
        <AiFillLinkedin className="w-8 h-8 cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-md duration-300" />
        <FiInstagram className="w-8 h-8 cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-md duration-300" />
        <BsDiscord className="w-8 h-8 cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-md duration-300" />
      </div>
    </div>
  );
}
