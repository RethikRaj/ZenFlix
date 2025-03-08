import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        mainClip : null,
        popularMovies : null,
        topRatedMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMainClip : (state,action)=>{
            state.mainClip = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addMainClip, addPopularMovies, addTopRatedMovies} = moviesSlice.actions

export default moviesSlice.reducer;