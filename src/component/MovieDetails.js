import React from "react";
import { useSelector } from "react-redux";
import { useYoutubeid } from "../hooks/usemovieId";

export const MovieDetails = () => {
  const movies = useSelector((store) => store.movies.nowplayingmovies);

  if (!movies) return;
  const MainMovie = movies[0];
  console.log(MainMovie.id);
  return (
   
      <div className="py-16 pt-[300px] px-24">
        <h1 className="font-extrabold text-6xl">{MainMovie.title}</h1>
        <h3 className="w-1/2">{MainMovie.overview}</h3>
        <div>
          <button className="bg-slate-400 rounded-xl px-8 py-3 opacity-25">
            ▶️ Play
          </button>
          <button className="bg-slate-400 rounded-xl px-8 py-3 ">
            &#9432; More Info
          </button>
        </div>
      </div>
  
  );
};
