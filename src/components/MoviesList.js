import React from "react";
import MovieCard from "./MovieCard";
import { Each } from "./../utils/Each";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="mx-4 pb-4">
      <h1 className="text-white text-2xl py-3">{title}</h1>
      <div className="flex overflow-x-auto">
        <Each
          of={movies}
          render={(movie) => {
            return (
              <div className="flex">
                <MovieCard posterPath={movie.poster_path} />
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default MoviesList;
