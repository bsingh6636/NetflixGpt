import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerid } from "../utils/movieSlice";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.nowplayingmovies);

  if (!movies) return;
  function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const randomnum = getRandomNumber(movies.length); 
  console.log(randomnum)
  const MainMovie = movies[3];
  dispatch(addtrailerid(MainMovie?.id))
  return (
   
      <div className="w-screen aspect-video py-16 pt-[20%] px-24 absolute bg-gradient-to-r from-black">
        <h1 className="font-extrabold text-6xl text-white">{MainMovie.title}</h1>
        <h3 className="w-1/4 py-6 text-lg text-white">{MainMovie.overview}</h3>
        <div>
          <button className="bg-white rounded-lg p-4 px-12 py-3 text-xl text-black hover:bg-opacity-90">
            ▶️ Play
          </button>
          <button className="mx-2 bg-gray-500 rounded-lg p-4 px-12 py-3 text-xl text-white bg-opacity-50">
            &#9432; More Info
          </button>
        </div>
      </div>
  
  );
};
