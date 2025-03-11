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
        },
        clearGptSliceState : ()=>{
            return {
                onGptSearchPage : false,
                suggestedMovies : null
            }
        }
    }
})

export const {toggleOnGptSearchPage, addSuggestedMovies, clearGptSliceState} = GptSlice.actions;

export default GptSlice.reducer;