import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies" ,
    initialState : {nowplayingmovies : null },
    reducers : {
        addnowplayingmovies :(state,action) =>{
            state.nowplayingmovies = action.payload;
        },
    },
});
export const {addnowplayingmovies} = movieSlice.actions;
export default movieSlice.reducer;