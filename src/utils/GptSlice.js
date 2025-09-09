import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "gpt",
    initialState : {
        onGptSearchPage : false,
        suggestedMovies : null,
        loading : false
    },
    reducers : {
        toggleOnGptSearchPage : (state)=>{
            state.onGptSearchPage = !state.onGptSearchPage;
        },
        addSuggestedMovies : (state,action)=>{
            state.suggestedMovies = action.payload
            state.loading = false
        },
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        },
        clearGptSliceState : ()=>{
            return {
                onGptSearchPage : false,
                suggestedMovies : null
            }
        }
    }
})

export const {toggleOnGptSearchPage, addSuggestedMovies, startLoading, stopLoading,clearGptSliceState} = GptSlice.actions;

export default GptSlice.reducer;