import React from "react";
import { Header } from "./Header";
import usenowplayingMovie from "../hooks/usenowplayinhMovie";
import MainMovie from "./MainMovie";
import SecondaryMovie from "./SecondaryMovie";
import { addnowplayingmovies, addpopularmovies, addtopratedmovies, addupcomingmovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import GptSuggestion from "./GptSuggestion";

const Browse = () => {
  const gptstate = useSelector((store)=>store.gpt.gptstate)
  usenowplayingMovie("now_playing",addnowplayingmovies);
  usenowplayingMovie("popular",addpopularmovies);
  usenowplayingMovie("upcoming",addupcomingmovies);
  usenowplayingMovie("top_rated",addtopratedmovies);
  return (
    <div className=" ">
      <Header />
      {
        gptstate ?<div className="bg-black"><GptSearchPage/><GptSuggestion/> </div> : <>
             <MainMovie/>
      <SecondaryMovie/>        
        </>
      }
     
    </div>
  );
};

export default Browse;
