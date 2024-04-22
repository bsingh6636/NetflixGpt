import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDBoptions } from "../utils/Const";

const useNowplayingMovie = (title,addredux) =>{
    const dispatch = useDispatch();
    const nowplayingmovie = async () => {
      const data = await fetch(
      `https://api.themoviedb.org/3/movie/${title}`,
        TMDBoptions
      );
      const jsone = await data.json();
    //   console.log(jsone.results);
      // dispatch(addnowplayingmovies(jsone.results));
      dispatch(addredux(jsone.results));
    };
    useEffect(() => {
      nowplayingmovie();
    }, []);
}
export default useNowplayingMovie;