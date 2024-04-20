import { useEffect, useState } from "react";
import { TMDBoptions } from "../utils/Const";

export const useYoutubeid = (movie_id) => {
    const [youtubid ,setyoutubid] = useState(null);
  const movieId = async () => {
    const moviesid = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      TMDBoptions
    );
    setyoutubid = await moviesid.json();
    console.log(youtubid);
  };

  useEffect(() => {
    movieId();
  }, []);
  return youtubid;
};
