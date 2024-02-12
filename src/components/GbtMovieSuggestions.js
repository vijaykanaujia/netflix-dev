import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GbtMovieSuggestions = () => {
  const { movieNames, movieSearchResult } = useSelector((store) => store.gbt);
  console.log(movieNames);
  if (!movieNames) return null;
  return (
    <div className="mx-2 py-2 mt-4 bg-black bg-opacity-90">
      {movieNames.map((movieName, index) => {
        return movieSearchResult[index].results.length ? (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={movieSearchResult[index].results}
          />
        ) : null;
      })}
    </div>
  );
};

export default GbtMovieSuggestions;
