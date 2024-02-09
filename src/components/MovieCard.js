import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-32 me-3">
      <img alt={"mobies card"} src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
