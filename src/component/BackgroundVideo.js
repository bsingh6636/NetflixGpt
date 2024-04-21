import React, { useEffect, useState } from "react";
import { TMDBoptions } from "../utils/Const";
import { useSelector } from "react-redux";

export const BackgroundVideo = () => {
  const movie_id = useSelector((store) => store.movies.trailerid);
  const [trailerid, settrailerid] = useState(null);
  const movieId = async () => {
    const moviesid = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      TMDBoptions
    );
    const youtubide = await moviesid.json();
   
    if (!youtubide.results) return null;
    const youtubid = youtubide.results.filter(
      (array) => array.type === "Teaser"
    );
   
    function getRandomNumber(max) {
      return Math.floor(Math.random() * (max + 1));
    }
    const randomnum = getRandomNumber(youtubid.length); 
    //  console.log(randomnum)
    settrailerid(youtubid.length ? youtubid[randomnum].key : youtubide[0].key);
    
  };
  useEffect(() => {
    movieId();
  }, [movie_id]);
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailerid};controls=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
