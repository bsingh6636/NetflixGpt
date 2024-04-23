import React, { useRef, useState } from "react";
import { genAI } from "../utils/openAI";
import { TMDBoptions } from "../utils/Const";
import { useDispatch } from "react-redux";
import { addgeminiresult, addgptmovieresult } from "../utils/gptSlice";


const GptSearchPage = () => {
  const gptsearch = useRef(null);
  const [resultarray, setresultarray] = useState(null);
  const dispatch = useDispatch();
  const movetmdbsearch =async (movie_name) =>{
  try{
      const data= await fetch('https://api.themoviedb.org/3/search/movie?query=-' + movie_name +'&page=1', TMDBoptions)
      const response =await data.json();
    // console.log(response)
    // setresponse(response)
    return response.results;
  }
  catch(error){
      console.log(error)
      return error
  } }
  const handlegptsearch = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      `List of 5 movies separated by commas and enclosed in double quotes: "movie1, movie2,movie3,movie4,movie5" (` +
      gptsearch.current.value +
      `)`;
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
     setresultarray(text.split(","));
     console.log(resultarray);
     dispatch(addgeminiresult(resultarray))
    
    } catch (error) {
      console.log(error);
    }
     if(resultarray){
      const data =resultarray.map(movie=> movetmdbsearch(movie))   
     const result =await Promise.all(data);
     console.log(result);
     dispatch(addgptmovieresult(result))
     }
    
  };
          
  
  // const data= useMovieSearcher('barbie');
  // console.log(data);

  return (
    <div className="pt-[15%] flex justify-center" >
       {/* <img  className='absolute z-10' src={netflixBG} alt='login background'/> */}
      <form
        className="w-1/2 h-28 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptsearch}
          className="bg-white  col-span-9 m-4 p-4"
          placeholder="What do you want to search?"
        ></input>
        <button
          className="col-span-3 m-4 p-2 bg-red-700 text-white rounded-lg"
          onClick={handlegptsearch}
        >
          Search
        </button>
        {/* <GptSuggestion/> */}
      </form>
      
    </div>
  );
};

export default GptSearchPage;
