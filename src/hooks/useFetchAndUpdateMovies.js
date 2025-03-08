import { useEffect } from "react";
import { API_OPTIONS , MOVIES_LIST_API} from "../utils/constants";
import { useDispatch } from "react-redux";


const useFetchAndUpdateMovies = (movieListsType, dispatchAction)=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
        const response = await fetch(`${MOVIES_LIST_API}${movieListsType}?page=1`,API_OPTIONS);
        const jsonResponse = await response.json();
        dispatch(dispatchAction(jsonResponse.results));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useFetchAndUpdateMovies;