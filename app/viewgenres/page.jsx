"use client"
import React, { useContext } from "react";
import { TaskContext } from "../context/TasksContext";
import { imgPath } from "../movies/trending/page";



function Page() {
    const values = useContext(TaskContext)
    const movie = values.tasks.movie

  console.log(values.tasks);
  console.log("aquí es");

  return (
    <div>
      <h1>por género</h1>
      <div className="container">
        <div className="grid grid-cols-4 ">
          {movie && movie.length > 0 ? (
            movie.map((movie) => (
              <div className="m-10 border border-gray-900 rounded p-4 text-center">
                <h1>{movie.title}</h1>
                <img src={imgPath + movie.poster_path} alt="" />
                <p className="text-xs">{movie.overview}</p>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
