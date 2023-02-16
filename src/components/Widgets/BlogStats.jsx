import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

function BlogStats() {
  return (
    <div className="">
      <div className="bg-white p-5 rounded-xl drop-shadow-lg">
        <div className=" flex flex-col space-y-8">
          <div className="flex space-x-11 items-center">
            <p className="text-xl font-bold text-slate-700">BlogStats</p>
            <div className="text-semibold cursor-pointer flex text-slate-700 border border-slate-600 rounded-full items-center px-3 my-3">
              <p className="px-1">Dashboard</p>
              <BsArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex space-x-6 text-medium font-medium text-slate-700">
              <p className="cursor-pointer">PageViews</p>
              <p className="text-blue-700 cursor-pointer">Articles</p>
              <p className="cursor-pointer">Appreciations</p>
            </div>
            <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
          </div>

          <div className="flex space-x-11 px-1 font-medium text-medium text-slate-900">
            <div className="flex flex-col">
              <p className="">7 days</p>
              <p className="">0</p>
            </div>
            <div className="flex flex-col">
              <p className="">All time</p>
              <p className="">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogStats;
