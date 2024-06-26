import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  //  console.log(movies)

   if (!movies) return null;
  return (
    
    <div>
        <div  >
               <h1 className='capitalize font-extrabold text-4xl text-white py-2 pl-5 relative z-20 '>{title}</h1>
               <div className='mt-1  flex transition-all overflow-x-auto overflow-y-hidden'>
                <div className='flex justify-evenly mt-1 '>
                    {
                        movies.map((data,index)=> <MovieCard key={index} moviedetails={data}/>)
                    }
                </div>
                
               </div>
        </div>
    </div>
  )
}

export default MovieList