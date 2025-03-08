import { IMAGE_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-1/10 flex-shrink-0 mr-2 cursor-pointer">
        <img src={`${IMAGE_CDN_URL}${posterPath}`} className="rounded-lg"/>
    </div>
  )
}

export default MovieCard