import useFetchAndUpdateNowPlayingMovies from "../hooks/useFetchAndUpdateNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMoviesContainer from "./SecondaryMoviesContainer";


const Browse = () => {
  useFetchAndUpdateNowPlayingMovies();

  return (
    <div>
      <MainMovieContainer/>
      <SecondaryMoviesContainer/>
    </div>
  )
}

export default Browse;