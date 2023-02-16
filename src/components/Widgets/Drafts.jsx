import React from "react";

function Drafts() {
  return (
    <div className="bg-white p-5 rounded-xl drop-shadow-lg">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between space-y-6 items-center">
          <p className="text-2xl pt-4 font-bold text-slate-800">Drafts(3)</p>
          <p className="text-lg border-2 px-3 border-slate-600 rounded-2xl items-center cursor-pointer ">
            See all
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-xl font-semibold text-blue-700 cursor-pointer">No title</p>
          <p className="text-normal text-slate-600">Edited 20hrs ago</p>
        </div>
      </div>
    </div>
  );
}

export default Drafts;
