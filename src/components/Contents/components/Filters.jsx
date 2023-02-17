import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaMagic } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

function Filters() {
  return (
    <div className="bg-white p-4 rounded drop-shadow">
      <div className="flex justify-between px-2 items-center text-normal text-slate-600 font-medium">
        <div className="flex space-x-1 items-center cursor-pointer text-blue-600">
          <FaMagic />
          <p className="">Personalized</p>
        </div>
        <div className="flex space-x-1 items-center cursor-pointer">
          <AiOutlineStar />
          <p className="">Featured</p>
        </div>
        <div className="flex space-x-1 items-center cursor-pointer">
          <BiTimeFive />
          <p className="">Recent</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <FiFilter />
        </div>
      </div>
    </div>
  );
}

export default Filters;
