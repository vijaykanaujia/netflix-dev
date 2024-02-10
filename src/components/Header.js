import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { firebaseAuth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGbtSearchView } from "../utils/gbtSlice";
import { APP_LANG, APP_LOGO } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const isLoggedIn = auth !== null;
  const dispatch = useDispatch();
  const toggleGbtSearch = useSelector((store) => store.gbt?.showGbtSearch);
  const selectedLang = useSelector((store) => store.config?.lang);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      navigate("/browse");
    }
  }, [isLoggedIn, navigate]);

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGbtSearch = () => {
    dispatch(toggleGbtSearchView(!toggleGbtSearch));
  };

  const handleLanguageSelection = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="fixed w-full z-20 px-6 py-1 bg-gradient-to-b from-black flex justify-between items-center">
      <div>
        <img className="w-52" src={APP_LOGO} alt="logo" />
      </div>
      <div>
        <div className="flex items-center justify-center">
          {toggleGbtSearch && (
            <div>
              <select
                defaultValue={selectedLang}
                onChange={(event) => handleLanguageSelection(event)}
                className="bg-gray-800 me-2 px-3 py-2 text-white rounded-sm font-medium text-[17px] outline-none"
              >
                {APP_LANG.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {auth && (
            <>
              <button
                onClick={handleGbtSearch}
                className="bg-purple-700 rounded-sm text-white shadow-md px-2 py-2 me-2"
              >
                {toggleGbtSearch ? "Home Page" : "GBT Search"}
              </button>
              <img className="w-10" src={auth?.photoURL} alt="user" />
              <button
                className="ps-2 text-white"
                onClick={() => handleSignOut()}
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
