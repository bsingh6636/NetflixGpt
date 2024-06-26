import React, { useRef} from "react";
import { genAI } from "../utils/openAI";
import { TMDBoptions } from "../utils/Const";
import { useDispatch } from "react-redux";
import { addgeminiresult, addgptmovieresult } from "../utils/gptSlice";

const GptSearchPage = () => {
 const gptsearch = useRef(null);
 const dispatch = useDispatch();

 const movetmdbsearch = async (movie_name) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie_name}&page=1`,
        TMDBoptions
      );
      const response = await data.json();
      return response.results;
    } catch (error) {
      console.log(error);
      return error;
    }
 };

 const handlegptsearch = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      `List of 5 movies names separated by commas and enclosed in double quotes: "movie1, movie2,movie3,movie4,movie5" (` +
      gptsearch.current.value +
      `)`;
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const movies = text.split(","); // Directly use the result of split
      console.log(movies);
      dispatch(addgeminiresult(movies)); // Use movies directly

      if (movies.length > 0) {
        const data = movies.map((movie) => movetmdbsearch(movie));
        const results = await Promise.all(data);
        // console.log(results);
        dispatch(addgptmovieresult(results));
      }
    } catch (error) {
      console.log(error);
    }
 };

 return (
  <div className="pt-[15%] flex flex-col items-center">
  <span className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-lg">
    OpenAI Integrated SearchBar
  </span>
  <form
    className="w-1/2 h-28 bg-black grid grid-cols-12 rounded-lg shadow-lg"
    onSubmit={(e) => e.preventDefault()}
  >
    <input
      ref={gptsearch}
      className="bg-white col-span-9 m-4 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="eg : bollywood 90's funny"
    />
    <button
      className="col-span-3 m-4 p-2 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors"
      onClick={handlegptsearch}
    >
      Search
    </button>
  </form>
</div>


 );
};

export default GptSearchPage;
