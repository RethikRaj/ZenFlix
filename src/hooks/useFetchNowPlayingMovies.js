import { useEffect } from "react";
import { API_OPTIONS , NOW_PLAYING_MOVIES_API} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useFetchNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
        const response = await fetch(`${NOW_PLAYING_MOVIES_API}?page=1`,API_OPTIONS);
        const jsonResponse = await response.json();
        dispatch(addNowPlayingMovies(jsonResponse.results));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useFetchNowPlayingMovies;