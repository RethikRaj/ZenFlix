import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"

const GptSearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-300 flex flex-col items-center justify-center gap-7">
      <GptSearchBar/>
      <GptSuggestions/>
    </div>
  )
}

export default GptSearchPage;