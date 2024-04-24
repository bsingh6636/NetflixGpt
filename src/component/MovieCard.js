import React from "react";
import { tmdbimage_url } from "../utils/Const";

const MovieCard = ({ poster_path }) => {
   console.log(poster_path)
  if(poster_path.poster_path === null || undefined) return;
   console.log(poster_path)
  return (
    <div className="w-44 px-3 cursor-pointer hover:w-[195px] transition-all duration-500 ease-in-out transform hover:scale-105">
      <img
        className=" w-full object-cover"
        alt="movieimage"
        src={tmdbimage_url + poster_path.poster_path}
      />
    </div>
  );
};

export default MovieCard;
