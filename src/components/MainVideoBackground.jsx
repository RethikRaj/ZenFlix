import { useSelector } from "react-redux";
import useFetchAndUpdateMainClip from "../hooks/useFetchAndUpdateMainClip";

const MainVideoBackground = ({ movieId }) => {
  const mainVideoClip = useSelector((store) => store.movies?.mainClip);

  useFetchAndUpdateMainClip(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${mainVideoClip?.key}?autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MainVideoBackground;
