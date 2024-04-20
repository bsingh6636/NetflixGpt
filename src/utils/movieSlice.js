import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies" ,
    initialState : {
        nowplayingmovies : null,
        trailerid : null,
     },
    reducers : {
        addnowplayingmovies :(state,action) =>{
            state.nowplayingmovies = action.payload;
        },
        addtrailerid : (state,action) =>{
            state.trailerid = action.payload;
        }
    },
  
});
export const {addnowplayingmovies , addtrailerid} = movieSlice.actions;
export default movieSlice.reducer;