import MovieCard from "./MovieCard"

const MovieCategory = ({categoryTitle, categoryMovies}) => {
  return (
    <div className="my-2">
        <h1 className="font-bold text-2xl mb-3 text-white">{categoryTitle}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            {categoryMovies?.map((movie)=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
    </div>
  )
}

export default MovieCategory