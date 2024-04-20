import React, { useEffect, useState } from "react";
import { TMDBoptions } from "../utils/Const";
import { useDispatch } from "react-redux";
import { addtrailerid } from "../utils/movieSlice";

export const BackgroundVideo = () => {
    const dispatch = useDispatch();
  const [trailerid, settrailerid] = useState(null);
  const movieId = async () => {
    const moviesid = await fetch(
      "https://api.themoviedb.org/3/movie/693134/videos?language=en-US",
      TMDBoptions
    );
    const youtubide = await moviesid.json();

    console.log(youtubide);
    const youtubid = youtubide.results.filter(
      (array) => array.type === "Teaser"
    );
    settrailerid(youtubid.length ? youtubid[0].key : youtubide[0].key);
    console.log(trailerid);
    // dispatch(addtrailerid(trailerid));
  };
  useEffect(() => {
    movieId();
  }, []);
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
