import React, { useEffect, useState } from "react";
import { TMDBoptions } from "../utils/Const";
import "../utils/style.css"
const HoverTrailer = ({ moviedetails }) => {
  // console.log(moviedetails)
  const {id,vote_average,release_date,original_title}=  moviedetails ;
  console.log(original_title)
  const [trailerid, settrailerid] = useState(null)
  

  useEffect(() => {

    const movieId = async () => {
      try {

        const moviesid = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
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
  }, [id])




  if (!trailerid) return null;
  return (
    <div class=" relative  w-[350px] h-[350px] z-50 hover:bg-opacity-50 overflow-hidden transition duration-300 ease-in-out transform ">
      <div class="absolute inset-0 w-full h-full overflow-auto ">
        <iframe
          class="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerid}?autoplay=1&controls=1&mute=1`}
          title="YouTube video player"
        ></iframe>
       
      </div>
      <div class="absolute bottom-0 p-1  w-full mb-2  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold rounded-md shadow-lg">
      <div class="text-lg  flex justify-center">
          <span> <span class="title">{original_title}</span></span>
        </div>
        <div class="text-lg flex justify-center">
          <span>Released Date: <span class="subtitle">{release_date}</span></span>
        </div>
        <div class="text-lg  flex justify-center">
          <span>Rating: <span class="subtitle">{vote_average.toFixed(2)}</span></span>
        </div>
      </div>
    </div>
  );
};

export default HoverTrailer;