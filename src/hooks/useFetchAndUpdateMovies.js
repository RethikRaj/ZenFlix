import { useEffect } from "react";
import { API_OPTIONS , MOVIES_LIST_API} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";


const useFetchAndUpdateMovies = (movieListsType, dispatchAction, stateKey)=>{
    const dispatch = useDispatch();
    const stateValue = useSelector((store)=>store.movies[stateKey]);

    const fetchAndUpdateMovies = async ()=>{
        const response = await fetch(`${MOVIES_LIST_API}${movieListsType}?page=1`,API_OPTIONS);
        const jsonResponse = await response.json();
        dispatch(dispatchAction(jsonResponse.results));
    }

    useEffect(()=>{
        // Memoization : If only when there is no value in redux store then make an api call.
        if(stateValue === null){
            fetchAndUpdateMovies();
        }
    },[])
}

export default useFetchAndUpdateMovies;