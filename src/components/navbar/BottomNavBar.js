import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiNotificationLine } from "react-icons/ri";
import { BiBookBookmark } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { MdOutlineFeed } from "react-icons/md";

export default function BottomNavBar() {
  return (
    <div className=" inset-x-0 bottom-0 md:hidden fixed drop-shadow-2xl">
      <div className="flex items-center justify-between px-4 py-4 bg-white drop-shadow-md">
        <MdOutlineFeed className="w-8 h-8 cursor-pointer" />
        <IoIosSearch className="w-8 h-8 cursor-pointer " />
        <p className="rounded-full bg-blue-600 py-2 px-2 cursor-pointer">
          <FaPen className="w-5 h-5 cursor-pointer text-white" />
        </p>
        <BiBookBookmark className="w-8 h-8 cursor-pointer" />
        <RiNotificationLine className="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
}
