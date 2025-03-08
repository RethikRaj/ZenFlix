import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";


const Browse = () => {
  useFetchNowPlayingMovies();
  
  return (
    <div>Browse</div>
  )
}

export default Browse;