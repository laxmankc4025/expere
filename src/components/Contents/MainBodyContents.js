import React from "react";
import Posts from "./components/Posts";

export default function MainBodyContents() {
  return (
    <div className="flex flex-col space-y-6">
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}
