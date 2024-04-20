import { useEffect, useState } from "react";
import { TMDBoptions } from "../utils/Const";

export const useYoutubeid = (movie_id) => {
   let youtubid , ytid ;
  
  const movieId = async () => {
    const moviesid = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      TMDBoptions
    );
   const youtubide = await moviesid.json();
    youtubid = youtubide.results.filter((array)=>array.type === "Teaser")
    ytid = youtubid[0].key;
    console.log(ytid);
    console.log(youtubid);
  };

  useEffect(() => {
    movieId();
  }, [movie_id]);
  return ytid;
};
