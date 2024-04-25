import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GptSuggestion = () => {
    const gptResult = useSelector(store=>store.gpt)
    const geminiresult =gptResult.geminiresult;
    const gptTmdbResult =gptResult.gptmovieresult;
    // console.log(gptTmdbResult)
    if(!gptTmdbResult) return null;
  return (
    <div className=' '>
        {
            gptTmdbResult.map((movie,index)=><MovieList key={index}  title={geminiresult[index]} movies={gptTmdbResult[index]}/>)
        }
        
    </div>
  )
}

export default GptSuggestion