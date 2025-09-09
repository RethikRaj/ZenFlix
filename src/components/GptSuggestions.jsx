import { useSelector } from "react-redux"
import MovieCategory from "./MovieCategory";

const GptSuggestions = () => {
  const suggestedMoviesList = useSelector((store)=>store.gpt.suggestedMovies);
  const loading = useSelector((store)=>store.gpt.loading);

  if (loading) {
    return (
      <div className="w-10/12 -translate-y-12 p-6 bg-black/60 text-white rounded-lg shadow-lg text-center">
        <div className="animate-spin border-4 border-red-500 border-t-transparent rounded-full w-12 h-12 mx-auto"></div>
        <p className="mt-4 text-lg">Fetching movie suggestions...</p>
      </div>
    );
  }

  if(!suggestedMoviesList){
    return
  }

  return (
    <div className="w-10/12 -translate-y-12 p-4 bg-gradient-to-br from-red-400 to-red-600 text-white bg-opacity-95 rounded-lg shadow-xl">
      <MovieCategory categoryTitle={"Suggested Movies : "} categoryMovies={suggestedMoviesList}/>
    </div>
  )
}

export default GptSuggestions