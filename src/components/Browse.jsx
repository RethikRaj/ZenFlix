import useFetchAndUpdateMovies from "../hooks/useFetchAndUpdateMovies";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMoviesContainer from "./SecondaryMoviesContainer";


const Browse = () => {
  useFetchAndUpdateMovies("now_playing", addNowPlayingMovies,"nowPlayingMovies");
  useFetchAndUpdateMovies("popular", addPopularMovies,"popularMovies");
  useFetchAndUpdateMovies("top_rated",addTopRatedMovies,"topRatedMovies");

  return (
    <div className="bg-black">
      <MainMovieContainer/>
      <SecondaryMoviesContainer/>
    </div>
  )
}

export default Browse;