import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GbtSearchBar = () => {
  const selectedLang = useSelector((store) => store.config?.lang);
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 w-[40%]">
        <div className="col-span-10">
          <input
            type="text"
            className="w-full mx-2 px-2 py-3 rounded-s-sm outline-none outline"
            placeholder={lang[selectedLang].search_placeholder}
          />
        </div>
        <div className="col-span-2">
          <button className="w-full mx-2 px-4 py-3 bg-slate-700 rounded-e-sm text-white">
            {lang[selectedLang].search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GbtSearchBar;
