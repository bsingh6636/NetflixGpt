import React from "react";
import { Header } from "./Header";
import usenowplayingMovie from "../hooks/usenowplayinhMovie";
import MainMovie from "./MainMovie";
import SecondaryMovie from "./SecondaryMovie";

const Browse = () => {
  usenowplayingMovie();
  return (
    <>
      <Header />
      <MainMovie/>
      <SecondaryMovie/>
    </>
  );
};

export default Browse;
