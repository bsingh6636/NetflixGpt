
import React, { useState } from "react";
import { tmdbimage_url } from "../utils/Const";
import HoverTrailer from "./HoverTrailer";

const MovieCard = ({ moviedetails }) => {
 
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (moviedetails.poster_path === null || undefined) return null;
  // console.log(poster_path)
  return (
    <div className="relative" onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    
      {!isHovered ? (
        <>
        <div
      className="relative w-44 px-3 cursor-pointer hover:w-[195px] transition-all duration-500 ease-in-out transform hover:scale-105"
     
    >
        <img
          className="w-full object-cover"
          alt="movieimage"
          src={tmdbimage_url + moviedetails.poster_path}
        /> </div></>
      ) : (
        <HoverTrailer moviedetails={moviedetails}/>
      )}
    </div>
  );
};

export default MovieCard;

