import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies" ,
    initialState : {
        nowplayingmovies : null,
        trailerid : null,
        upcomingmovies: null,
        topratedmovies: null,
        pupolarmovies: null,
     },
    reducers : {
        addnowplayingmovies :(state,action) =>{
            state.nowplayingmovies = action.payload;
        },
        addtrailerid : (state,action) =>{
            state.trailerid = action.payload;
        },
        addpopularmovies : (state,action) =>{
            state.popularmovies = action.payload;
        },
        addupcomingmovies :(state,action) =>{
            state.upcomingmovies =action.payload;
        },
        addtopratedmovies :(state,action) =>{
            state.topratedmovies = action.payload;
        }
    },
  
});
export const {addnowplayingmovies , addtrailerid ,addpopularmovies,addupcomingmovies,addtopratedmovies} = movieSlice.actions;
export default movieSlice.reducer;