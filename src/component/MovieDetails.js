import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerid } from "../utils/movieSlice";
import { getRandomNumber } from "../utils/Const";

export const MovieDetails = () => {
 const dispatch = useDispatch();
 const movies = useSelector((store) => store.movies.nowplayingmovies);
 const [randomIndex, setRandomIndex] = useState(null);
 const randomIndexRef = useRef(null); // Use a ref to persist the initial randomIndex value

 useEffect(() => {
    if (movies && randomIndexRef.current === null) {
      // Generate a random index for the movies array
      const newRandomIndex = getRandomNumber(movies.length);
      // Set the randomIndex state only if it hasn't been set before
      if (randomIndexRef.current === null) {
        setRandomIndex(newRandomIndex);
        randomIndexRef.current = newRandomIndex; // Update the ref to mark that randomIndex has been set
      }
      const mainMovie = movies[randomIndexRef.current];
      console.log(randomIndexRef.current);
      // Dispatch the action to add the trailer ID
      dispatch(addtrailerid(mainMovie?.id));
      // console.log(mainMovie);
    }
 }, [movies]);

 // Ensure movies is loaded and randomIndex is not null before rendering
 if (!movies || randomIndex === null) return null;

 const mainMovie = movies[randomIndex];

 return (
    <div className="w-screen aspect-video py-16 pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="font-extrabold text-6xl text-white">{mainMovie.title}</h1>
      <h3 className="w-1/4 py-6 text-sm text-white">{mainMovie.overview}</h3>
      <div>
        <button className="bg-white rounded-lg p-4 px-12 py-3 text-xl text-black hover:bg-opacity-90">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 rounded-lg p-4 px-12 py-3 text-xl text-white bg-opacity-50">
          &#9432; More Info
        </button>
      </div>
    </div>
 );
};
