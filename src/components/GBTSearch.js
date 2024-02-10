import React from "react";
import GbtSearchBar from "./GbtSearchBar";
import GbtMovieSuggestions from "./GbtMovieSuggestions";
import { HOME_BANNER } from "../utils/constant";

const GBTSearch = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${HOME_BANNER})`,
      }}
      className="pt-28"
    >
      <GbtSearchBar />
      <GbtMovieSuggestions />
    </div>
  );
};

export default GBTSearch;
