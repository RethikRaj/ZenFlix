import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "gpt",
    initialState : {
        onGptSearchPage : false,
        suggestedMovies : null
    },
    reducers : {
        toggleOnGptSearchPage : (state)=>{
            state.onGptSearchPage = !state.onGptSearchPage;
        },
        addSuggestedMovies : (state,action)=>{
            state.suggestedMovies = action.payload
        }
    }
})

export const {toggleOnGptSearchPage, addSuggestedMovies} = GptSlice.actions;

export default GptSlice.reducer;