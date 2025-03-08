import useFetchAndUpdateMovies from "../hooks/useFetchAndUpdateMovies";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMoviesContainer from "./SecondaryMoviesContainer";


const Browse = () => {
  useFetchAndUpdateMovies("now_playing", addNowPlayingMovies);
  useFetchAndUpdateMovies("popular", addPopularMovies);
  useFetchAndUpdateMovies("top_rated",addTopRatedMovies);

  return (
    <div>
      <MainMovieContainer/>
      <SecondaryMoviesContainer/>
    </div>
  )
}

export default Browse;