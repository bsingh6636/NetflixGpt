import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const SecondaryMovie = () => {
   const movie =useSelector((store)=>store.movies)
   console.log(movie)
  return (
    <div className='bg-black z-20'>
      <div className='-mt-48'>
      <MovieList title={"Top Rated"} movies={movie.topratedmovies}/>
      <MovieList title={"Now Playing"} movies={movie.nowplayingmovies}/>
      <MovieList title={"Upcoming"} movies={movie.upcomingmovies}/>
      <MovieList title={"Popular"} movies={movie.popularmovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryMovie;