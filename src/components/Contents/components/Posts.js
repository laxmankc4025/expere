import React from "react";
import Image from "next/image";
import profileImage from "../../../assets/profileImage.png";
import { BsBookmarks } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

export default function Posts() {
  return (
    <div className="w-full">
      <div className="bg-white p-5 rounded-lg drop-shadow">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              src={profileImage}
              alt="profile picture"
              width={100}
              height={100}
              className="rounded-full w-12 h-12 cursor-pointer"
            />
            <p className="text-medium font-bold text-slate-800">Namxal CK</p>
          </div>
          <div className="cursor-pointer flex flex-col items-center space-y-4">
            <p className="text-xl font-bold text-slate-800">
              Add blog posts to your React site using the Hashnode API,
              Typescript and GraphQL
            </p>
            <p className="text-lg font-normal text-slate-700">
              If you are like me and like blogging from time to time nice to be
              able to fetch your posts and add them to your own personal site
              without the hassle of finding a headless CMS or hosting your
              own...
            </p>
          </div>
          <div className="flex justify-between items-center  text-slate-600">
            <BsBookmarks className="text-xl cursor-pointer" />
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 cursor-pointer">
                <AiOutlineHeart className="text-xl" />
                <p className="text-normal">12</p>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer">
                <FaRegCommentDots className="text-xl" />
                <p className="text-normal">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
