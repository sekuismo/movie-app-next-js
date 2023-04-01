"use client";
import React from "react";
export const API_KEY = "4e6dcbd1460fb66d632cfc4c69445c30";
// https://api.themoviedb.org/3/discover/movie?api_key={api_key}&with_genres=
function page() {
  return (
    <div>
      <h1 className=" text-5xl text-center">Películas app</h1>
      <div className="grid grid-cols-12">
        <a
          href="movies/trending"
          className="border-solid bg-red-400 hover:bg-red-600 text-center rounded-md "
        >
          {" "}
          moda
        </a>
        <a href="/movies/genres">Categories</a>
      </div>
    </div>
  );
}

export default page;
