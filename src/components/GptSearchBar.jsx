const GptSearchBar = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black/80 to-black/30">
      <form className="w-full flex justify-center -translate-y-48">
        <input type="text" placeholder="What would you like to watch today?" className="border border-black p-2 w-1/3 outline-none rounded-lg bg-gray-500/20"/>
        <button className="ml-2 bg-gray-700/70 px-4 rounded-lg hover:bg-gray-700/50 cursor-pointer">Search</button>
      </form> 
    </div>
  )
}

export default GptSearchBar