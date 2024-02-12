import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import openAi from "./../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import { addGbtMoviesResult } from "../utils/gbtSlice";

const GbtSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const searchMovieDMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/collection?query=" +
        movieName +
        "&include_adult=true&page=1",
      API_OPTIONS
    );

    return await data.json();
  };
  const handleGbtSearchClick = async () => {
    const gbtQuery =
      "Act as a movie recommendation system and suggest some movies for query : " +
      searchText.current.value +
      " . only give me names of 5 movie, comma saperated like the example result given ahead. Example result : Gadar, Dil, Don, Salaar, Tejas";
    const gbtResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: gbtQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gbtResults.choices?.[0]?.message?.content);
    const gbtMovies = gbtResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gbtMovies.map((gbtMovie) =>
      searchMovieDMDB(gbtMovie.trim())
    );
    const tmdbResult = await Promise.all(promiseArray);
    dispatch(
      addGbtMoviesResult({ movieName: gbtMovies, movieResults: tmdbResult })
    );
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-[40%]">
          <div className="col-span-10">
            <input
              ref={searchText}
              type="text"
              className="w-full mx-2 px-2 py-3 rounded-s-sm outline-none outline"
              placeholder={lang[selectedLang].search_placeholder}
            />
          </div>
          <div className="col-span-2">
            <button
              onClick={() => handleGbtSearchClick()}
              className="w-full mx-2 px-4 py-3 bg-slate-700 rounded-e-sm text-white"
            >
              {lang[selectedLang].search}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default GbtSearchBar;
