import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "gpt",
    initialState : {
        onGptSearchPage : false
    },
    reducers : {
        toggleOnGptSearchPage : (state)=>{
            state.onGptSearchPage = !state.onGptSearchPage;
        }
    }
})

export const {toggleOnGptSearchPage} = GptSlice.actions;

export default GptSlice.reducer;