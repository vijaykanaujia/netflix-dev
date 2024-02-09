import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const BannerVideo = ({ moviesID }) => {
  const trailerVideo = useSelector(
    (state) => state.movies?.trailerVideo || null
  );
  useMoviesTrailer(moviesID);
  return (
    <div>
      <iframe
      className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default BannerVideo;
