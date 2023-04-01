"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { API_KEY } from "../page";
import { imgPath } from "../trending/page";
import { moviesContext } from "@/app/context/TasksContext";
function page() {
  const [viewMoviesByGenre, setViewMoviesByGenre] = useState([]);
  const [viewGenres, setViewGenres] = useState([]);

  const { tasks } = moviesContext(); //contexto

  const movieByGenre = async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
    );
    const data = await response.data;
    // setViewMoviesByGenre(data.results);
    tasks.setMovie(data.results);
  };
  useEffect(() => {
    const genresCall = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY
      );
      const data = await response.data;
      setViewGenres(data.genres);
    };
    genresCall();
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center">Select a film genre 🐱</h1>
      <button
        onClick={() => {
          console.log(viewGenres);
        }}
      >
        view genres json
      </button>
      <div className="container text-center mx-0 px-0 ">
        <div className="grid grid-cols-8 gap-4">
          {viewGenres.map((genre) => (
            <Link href="/viewgenres">
              <button
                onClick={() => movieByGenre(genre.id)}
                className="text-xl text-center border-solid bg-slate-700 text-white cursor-pointer p-3 rounded-2xl"
                key={genre.id}
              >
                {genre.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-4 ">
          {viewMoviesByGenre.length > 0 ? (
            viewMoviesByGenre.map((movie) => (
              <div className=" m-10 border border-gray-900 rounded  p-4 text-center">
                <h1>{movie.title}</h1>
                <img src={imgPath + movie.poster_path} alt="" />
                <p className="text-xs">{movie.overview}</p>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
