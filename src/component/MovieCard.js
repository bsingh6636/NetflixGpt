import React, { useState } from "react";
import { tmdbimage_url } from "../utils/Const";
import HoverTrailer from "./HoverTrailer";

const MovieCard = ({ moviedetails }) => {
  const [hoveredCard, setHoveredCard] = useState(null); // State to track the hovered card

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  if (moviedetails.poster_path === null || moviedetails.poster_path === undefined) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter(moviedetails.id)} // Pass unique id
      onMouseLeave={handleMouseLeave}
    >
      {hoveredCard !== moviedetails.id ? (
        <div className="relative w-44 px-3 cursor-pointer hover:w-[195px] transition-all duration-500 ease-in-out transform hover:scale-105">
          <img
            className="w-full object-cover"
            alt="movieimage"
            src={tmdbimage_url + moviedetails.poster_path}
          />
        </div>
      ) : (
        <HoverTrailer moviedetails={moviedetails} />
      )}
    </div>
  );
};

export default MovieCard;
