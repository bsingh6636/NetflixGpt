import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerid } from "../utils/movieSlice";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.nowplayingmovies);

  useEffect(() => {
    if (movies) {
      const mainMovie = movies[3];
      dispatch(addtrailerid(mainMovie?.id));
    }
  }, [movies, dispatch]);

  if (!movies) return null;

  const mainMovie = movies[3];
  
  return (
    <div className="w-screen aspect-video py-16 pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="font-extrabold text-6xl text-white">{mainMovie.title}</h1>
      <h3 className="w-1/4 py-6 text-sm text-white">{mainMovie.overview}</h3>
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
