import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../utils/movieSlice";
import { TMDBoptions } from "../utils/Const";

const useNowplayingMovie = () =>{
    const dispatch = useDispatch();
    const nowplayingmovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        TMDBoptions
      );
      const jsone = await data.json();
    //   console.log(jsone.results);
      dispatch(addnowplayingmovies(jsone.results));
    };
    useEffect(() => {
      nowplayingmovie();
    }, []);
}
export default useNowplayingMovie;