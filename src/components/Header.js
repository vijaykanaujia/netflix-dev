import { signOut } from "firebase/auth";
import React from "react";
import { firebaseAuth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth } from "../utils/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        dispatch(removeAuth());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="px-6 py-1 bg-gradient-to-b from-black flex justify-between items-center">
      <div>
        <img
          className="w-52"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div>
        {auth && (
          <div className="flex items-center justify-center">
            <img className="w-10" src={auth?.photoURL} alt="user" />
            <button className="ps-2" onClick={() => handleSignOut()}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
