import { useSelector } from "react-redux";
import useFetchAndUpdateMainClip from "../hooks/useFetchAndUpdateMainClip";

const MainVideoBackground = ({ movieId }) => {
  const mainVideoClip = useSelector((store) => store.movies?.mainClip);

  useFetchAndUpdateMainClip(movieId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${mainVideoClip?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MainVideoBackground;
