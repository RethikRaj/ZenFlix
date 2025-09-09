import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"

const GptSearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 flex flex-col items-center justify-center gap-7">
      <GptSearchBar/>
      <GptSuggestions/>
    </div>
  )
}

export default GptSearchPage;