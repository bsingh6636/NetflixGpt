import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptstate:false,
        gptmovieresult:null,
        geminiresult:null},
    reducers : {
        togglegptstate : (state) =>{
            state.gptstate = !state.gptstate
        },
        addgptmovieresult : (state,action) =>{
            state.gptmovieresult = action.payload;
        },
        addgeminiresult : (state,action)=>{
            state.geminiresult =action.payload;
        }
    }
})
export default gptSlice.reducer;
export const {togglegptstate , addgptmovieresult , addgeminiresult} = gptSlice.actions