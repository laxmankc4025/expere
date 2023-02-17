import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineFeed } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";

export default function MobileSideBar() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <RxHamburgerMenu
        onClick={() => setShowModal(true)}
        className="w-6 h-6 font-bold cursor-pointer xl:hidden"
      />
      {showModal ? (
        <>
          <div className="h-screen">
            <div className="flex justify-between overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto mx-0  max-w-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Expere</h3>

                    <RxCross2
                      onClick={() => setShowModal(false)}
                      className="text-xl text-slate-900 w-8 h-8 cursor-pointer"
                    />
                  </div>
                  {/*body*/}
                  <div className="relative px-36 py-28 lg:py-8  flex-auto">
                    <div className="flex flex-col space-y-8 px-1  ">
                      <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
                        <div className="flex text-blue-700 items-center cursor-pointer">
                          <MdOutlineFeed className="w-10 h-10" />
                          <p className="px-6 text-2xl font-semibold">My Feed</p>
                        </div>
                      </div>
                      <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
                        <div className="flex text-slate-600 items-center cursor-pointer">
                          <MdOutlineExplore className="w-10 h-10" />
                          <p className="px-6 text-2xl font-semibold">Explore</p>
                        </div>
                      </div>
                      <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
                        <div className="flex text-slate-600 items-center cursor-pointer">
                          <RiDraftLine className="w-10 h-10" />
                          <p className="px-6 font-semibold text-2xl"> Drafts</p>
                        </div>
                      </div>
                      <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
                        <div className="flex text-slate-600 items-center cursor-pointer">
                          <BiBookBookmark className="w-10 h-10" />
                          <p className="px-6 font-semibold text-2xl">
                            Bookmarks
                          </p>
                        </div>
                      </div>
                      <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
                        <div className="flex text-slate-600 items-center cursor-pointer">
                          <FaLaptopCode className="w-10 h-10" />
                          <p className="px-6 text-2xl font-semibold">
                            Hackathons
                          </p>
                        </div>
                      </div>
                      <div className="hover:bg-slate-100 hover:rounded-md hover:px-2 hover:py-2">
                        <div className="flex text-slate-600 items-center cursor-pointer">
                          <AiOutlineDoubleRight className="w-10 h-10" />
                          <p className="px-6 text-2xl font-semibold"> More</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className=" flex px-12 text-slate-700  justify-between p-6 border-t border-solid border-slate-700 rounded-b">
                    <BsTwitter className="w-12 h-12 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-md duration-300" />
                    <AiFillLinkedin className="w-12 h-12 cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-md duration-300" />
                    <FiInstagram className="w-12 h-12 cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-md duration-300" />
                    <BsDiscord className="w-12 h-12 cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-md duration-300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        </>
      ) : null}
    </>
  );
}
