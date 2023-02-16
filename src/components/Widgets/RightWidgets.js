import React from "react";
import BlogStats from "./BlogStats";
import Bookmarks from "./Bookmarks";
import Drafts from "./Drafts";

export default function RightWidgets() {
  return (
    <div className=" flex flex-col space-y-6">
      <BlogStats />
      <Drafts />
      {/* <div className="">
        <p className="">Trending</p>
      </div> */}
      <Bookmarks />
    </div>
  );
}
