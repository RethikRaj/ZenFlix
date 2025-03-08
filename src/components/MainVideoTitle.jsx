const MainVideoTitle = ({title, description}) => {
  return (
    <div className="absolute pt-[20%] px-12 text-white ">
        <h1 className="font-bold text-7xl">{title}</h1>
        <p className="font-light mt-4 w-1/3">{description}</p>
        <div>
            <button className="bg-white text-black font-bold text-lg px-12 py-4 rounded-2xl mt-2 mx-2 hover:bg-white/60 cursor-pointer"> ▷ Play </button>
            <button className="bg-gray-700 text-white px-12 py-4 rounded-2xl mt-2 mx-2 hover:bg-gray-700/60 cursor-pointer"> ⓘ More Info</button>
        </div>
    </div>
  )
}

export default MainVideoTitle