import { useEffect, useState } from "react";
import { TMDBoptions } from "../utils/Const";


export const useMovieSearcher = (movie_name) =>{
    const [response , setresponse] =useState(null)

     const movetmdbsearch =async (movie_name) =>{
        try{
            const date= await fetch('https://api.themoviedb.org/3/search/movie?query=-' + movie_name +'&page=1', TMDBoptions)
            const response =await date.json();
          console.log(response)
          setresponse(response)
        }
        catch(error){
            console.log(error)
            setresponse(error)
        }
     
     }

   useEffect(()=>{
    movetmdbsearch();
   },[movie_name]);
   return response;
}