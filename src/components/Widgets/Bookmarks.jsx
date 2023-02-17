import React from "react";

function Bookmarks() {
  return (
    <div className="bg-white p-5 rounded-xl drop-shadow">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between">
          <p className="text-2xl font-bold text-slate-800">Bookmarks</p>
          <p className="text-lg border-2 px-3 border-slate-600 rounded-2xl items-center cursor-pointer ">
            See all
          </p>
        </div>
        <p className="text-center font-medium text-slate-600">
          Nothing here yet 👋
        </p>
      </div>
    </div>
  );
}

export default Bookmarks;
