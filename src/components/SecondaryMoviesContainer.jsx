import { useSelector } from "react-redux"
import MovieCategory from "./MovieCategory"

const SecondaryMoviesContainer = () => {
  const movies = useSelector((store)=>store.movies)


  return (
    <div className="px-4 bg-black">
      {movies &&
        <div className="mx-8 -translate-y-55">
          <MovieCategory categoryTitle={"Now Playing"} categoryMovies={movies?.nowPlayingMovies}/>
          <MovieCategory categoryTitle={"Popular"} categoryMovies={movies?.popularMovies}/>
          <MovieCategory categoryTitle={"Top Rated"} categoryMovies={movies?.topRatedMovies}/>
        </div>
      }
    </div>
  )
}

export default SecondaryMoviesContainer