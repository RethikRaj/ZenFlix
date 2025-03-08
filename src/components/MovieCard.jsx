import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="group w-1/10 flex-shrink-0 mr-2 cursor-pointer overflow-hidden rounded-lg">
      <img 
        src={`${IMAGE_CDN_URL}${posterPath}`} 
        className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
  );
};

export default MovieCard;
