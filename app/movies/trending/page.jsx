"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../page";
export const imgPath = "https://image.tmdb.org/t/p/w300/";
function page() {
  
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const movie = async () => {
      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
      );
      const data = await request.data;
      console.log(request.status);
      console.log(request.statusText);

      setTrending(data.results);
    };
    movie();
  }, []);
  return (
    <div>
      <h1  className="text-4xl text-center" >Movies</h1>
        <div className="grid grid-cols-12">

        <a href="/movies"  className="border-solid bg-red-400 hover:bg-red-600 text-center rounded-md "  >Back</a>    
        <button
        onClick={() => {
          console.log(trending);
        }}
      >
        View Json
      </button>
      
        </div>

      <div className="grid grid-cols-5">
        {trending.map((pelicula) => (
          <div className=" m-10 border border-gray-900 rounded  p-4 text-center">
            <h1 className="text-3xl text-center" key={pelicula.id}>
              {pelicula.title}
            </h1>
            <img src={`${imgPath}${pelicula.poster_path}`} alt="" />
            <p>Description :{pelicula.overview}</p>
            <p>{pelicula.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
