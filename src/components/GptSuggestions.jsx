import { useSelector } from "react-redux"
import MovieCategory from "./MovieCategory";

const GptSuggestions = () => {
  const suggestedMoviesList = useSelector((store)=>store.gpt.suggestedMovies);
  return (
    <div className="w-10/12 -translate-y-12 p-4 bg-black/30">
      <MovieCategory categoryTitle={"Suggested Movies : "} categoryMovies={suggestedMoviesList}/>
    </div>
  )
}

export default GptSuggestions