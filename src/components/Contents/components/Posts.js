import React from "react";

export default function Posts() {
  return (
    <div className="bg-white p-5 rounded-lg drop-shadow-lg">
      <div className="cursor-pointer">
        <p className="text-2xl font-bold text-slate-800">
          Add blog posts to your React site using the Hashnode API, Typescript
          and GraphQL
        </p>
        <p className="text-lg font-normal text-slate-700">
          If you are like me and like blogging from time to time nice to be able
          to fetch your posts and add them to your own personal site without the
          hassle of finding a headless CMS or hosting your own...
        </p>
      </div>
    </div>
  );
}
