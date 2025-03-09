import { useSelector } from "react-redux"
import MovieCategory from "./MovieCategory";

const GptSuggestions = () => {
  const suggestedMoviesList = useSelector((store)=>store.gpt.suggestedMovies);
  return (
    <div className="w-10/12 -translate-y-12 p-4 bg-gradient-to-br from-red-600 to-red-800 text-white bg-opacity-95 rounded-lg shadow-xl">
      <MovieCategory categoryTitle={"Suggested Movies : "} categoryMovies={suggestedMoviesList}/>
    </div>
  )
}

export default GptSuggestions