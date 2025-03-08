const MainVideoTitle = ({title, description}) => {
  return (
    <div className="pt-36 mx-12">
        <h1 className="font-bold text-7xl">{title}</h1>
        <p className="font-light mt-4 w-1/3">{description}</p>
        <div>
            <button className="bg-black/80 text-white px-12 py-4 rounded-2xl mt-2 mx-2 hover:bg-black/60 cursor-pointer"> ▷ Play </button>
            <button className="bg-black/80 text-white px-12 py-4 rounded-2xl mt-2 mx-2 hover:bg-black/60 cursor-pointer"> ⓘ More Info</button>
        </div>
    </div>
  )
}

export default MainVideoTitle