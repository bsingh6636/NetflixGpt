import React, { useEffect, useState } from "react";
import { TMDBoptions } from "../utils/Const";
import { useSelector } from "react-redux";

export const BackgroundVideo = () => {
  const movie_id = useSelector((store) => store.movies.trailerid);
  const [trailerid, settrailerid] = useState(null);
  function getRandomNumberInclusive(a) {
    return Math.floor(Math.random() * (a + 1));
   }
   
  const movieId = async () => {
    try {
      // console.log(movie_id);
      const moviesid = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
        TMDBoptions
      );
      const youtubide = await moviesid.json();

      if (!youtubide.results) return null;
      const youtubid = youtubide.results.filter(
        (video) => video.type === "Trailer" || video.type === "Teaser"
      );
     
       
        // Call the function with youtubid.length to get a random index
 const randomIndex = getRandomNumberInclusive(youtubid.length);

 let trailerId;

if (youtubid.length && youtubid[randomIndex]?.key) {
    trailerId = youtubid[randomIndex].key;
} else if (youtubid.length) {
    trailerId = youtubid[0].key;
} else if (youtubide.length) {
    trailerId = youtubide[0].key;
} else {
    trailerId = "1"; 
}

settrailerid(trailerId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (movie_id) movieId();
  }, [movie_id]);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerid}?autoplay=1&controls=1&mute=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};
