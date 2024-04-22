import React from "react";
import { Header } from "./Header";
import usenowplayingMovie from "../hooks/usenowplayinhMovie";
import MainMovie from "./MainMovie";
import SecondaryMovie from "./SecondaryMovie";
import { addnowplayingmovies, addpopularmovies, addtopratedmovies, addupcomingmovies } from "../utils/movieSlice";

const Browse = () => {
  usenowplayingMovie("now_playing",addnowplayingmovies);
  usenowplayingMovie("popular",addpopularmovies);
  usenowplayingMovie("upcoming",addupcomingmovies);
  usenowplayingMovie("top_rated",addtopratedmovies);
  return (
    <div className=" ">
      <Header />
      <MainMovie/>
      <SecondaryMovie/>
    </div>
  );
};

export default Browse;
