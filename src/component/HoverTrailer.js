import React, { useState } from "react";
import { TMDBoptions } from "../utils/Const";

const HoverTrailer = ({movieid}) => {
    const [trailerid , settrailerid] = useState(null)
    const movieId = async () => {
        try {
         
          const moviesid = await fetch(
            `https://api.themoviedb.org/3/movie/${movieid}/videos`,
            TMDBoptions
          );
          const youtubide = await moviesid.json();
    
          if (!youtubide.results) return null;
          const youtubid = youtubide.results.filter(
            (video) => video.type === "Trailer" || video.type === "Teaser"
          );
         
       
    
    
     settrailerid(youtubid.length ? youtubid[0]?.key : youtubide[0].key);
     
        } catch (error) {
          console.log(error);
        }
      };
    
      movieId();
 if (!trailerid)   return null;
  return (
  
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerid}?autoplay=1&controls=1&mute=1`}
        title="YouTube video player"
      ></iframe>
      <h1 className="bg-white">Hellow</h1>
    </div>
  );
};

export default HoverTrailer;