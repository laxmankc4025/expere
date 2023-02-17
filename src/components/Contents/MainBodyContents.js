import React from "react";
import Filters from "./components/Filters";
import Posts from "./components/Posts";

export default function MainBodyContents() {
  return (
    <div className="">
      <div className="flex flex-col space-y-6">
        <Filters />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  );
}
