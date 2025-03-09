import { useDispatch } from "react-redux";
import { addMainClip } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchAndUpdateMainClip = (movieId)=>{
    const dispatch = useDispatch();
	const fetchMovieClips = async ()=>{
		const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
		const jsonResponse = await response.json();

		const trailers = jsonResponse?.results?.filter((clip)=> clip.type === "Trailer")
		// if there is no trailer or more than one trailer 
		const mainClip = trailers.length === 0 ? jsonResponse.results[0] : trailers[0];
		dispatch(addMainClip(mainClip));
	}

	useEffect(()=>{
		fetchMovieClips();
	},[]);
}

export default useFetchAndUpdateMainClip;