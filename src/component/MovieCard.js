
import React, { useState } from "react";
import { tmdbimage_url } from "../utils/Const";
import HoverTrailer from "./HoverTrailer";

const MovieCard = ({ poster_path }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (poster_path.poster_path === null || undefined) return null;
  // console.log(poster_path)
  return (
    <div
      className="relative w-44 px-3 cursor-pointer hover:w-[195px] transition-all duration-500 ease-in-out transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered ? (
        <img
          className="w-full object-cover"
          alt="movieimage"
          src={tmdbimage_url + poster_path.poster_path}
        />
      ) : (
        <HoverTrailer movieid={poster_path.id}/>
      )}
    </div>
  );
};

export default MovieCard;

