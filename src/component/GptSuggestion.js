import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GptSuggestion = () => {
    const gptResult = useSelector(store=>store.gpt)
    const geminiresult =gptResult.geminiresult;
    const gptTmdbResult =gptResult.gptmovieresult;
    // console.log(gptTmdbResult)
    if(!gptTmdbResult) return  <h1 className='h-screen'>No movies</h1>;
  return (
    <div className='bg-black'>
        {
            gptTmdbResult.map((movie,index)=><MovieList key={index}  title={geminiresult[index]} movies={gptTmdbResult[index]}/>)
        }
       
    </div>
  )
}

export default GptSuggestion