import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        mainClip : null
    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMainClip : (state,action)=>{
            state.mainClip = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addMainClip} = moviesSlice.actions

export default moviesSlice.reducer;