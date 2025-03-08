import { useSelector } from "react-redux";
import MainVideoBackground from "./MainVideoBackground";
import MainVideoTitle from "./MainVideoTitle";

const MainMovieContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[Math.floor(Math.random() * movies.length)];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <MainVideoTitle title={original_title} description={overview} />
      <MainVideoBackground movieId={id} />
    </div>
  );
};

export default MainMovieContainer;
