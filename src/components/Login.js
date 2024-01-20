import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignInForm, checkValidSignUpForm } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAuth } from "../utils/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmitForm = () => {
    const message = isSignInForm
      ? checkValidSignInForm(email.current.value, password.current.value)
      : checkValidSignUpForm(
          username.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(message);
    if (message) return;

    if (isSignInForm) {
      signInWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(addAuth({ uid, email, displayName, photoURL }));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.messag6e;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/31915843?s=400&u=70a37246c008da50b5f310ef3a7da4f071f92a68&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addAuth({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.code + "--" + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      }}
    >
      <Header />
      <div className="bg-black bg-opacity-70 max-w-md mx-auto rounded-sm py-12 px-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="mt-4 mb-8 text-white text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              ref={username}
              type="text"
              className="w-full py-3 px-2 bg-zinc-700 placeholder-zinc-400 text-white border-zinc-700 rounded-sm"
              placeholder="Username"
            />
          )}
          <input
            ref={email}
            type="text"
            className="mt-4 w-full py-3 px-2 bg-zinc-700 placeholder-zinc-400 text-white border-zinc-700 rounded-sm"
            placeholder="Email or phone number"
          />
          <input
            ref={password}
            type="password"
            className="mt-4 w-full py-3 px-2 bg-zinc-700 placeholder-zinc-400 text-white border-zinc-700 rounded-sm"
            placeholder="Password"
          />
          {errorMessage && (
            <p className="my-2 text-red-600 text-md">{errorMessage}</p>
          )}
          <button
            onClick={() => handleSubmitForm()}
            type="button"
            className="mt-4 px4 py-2 w-full rounded-sm bg-red-600 hover:bg-red-700 text-white"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm && (
            <div className="text-center mt-2">
              <a href="/#" className="hover:underline text white text-white">
                Forgot password?
              </a>
            </div>
          )}
          {isSignInForm && (
            <div className="mt-10">
              <label className="text-white">
                <input type="checkbox" /> Remeber me
              </label>
            </div>
          )}
          <div className="mt-6">
            {isSignInForm ? (
              <span className="text-gray-300">
                New to Netflix?{" "}
                <a
                  href="/#"
                  onClick={() => toggleSignInForm()}
                  className="hover:underline text white text-white"
                >
                  Sign up now
                </a>
              </span>
            ) : (
              <span className="text-gray-300">
                Already user?{" "}
                <a
                  href="/#"
                  onClick={() => toggleSignInForm()}
                  className="hover:underline text white text-white"
                >
                  Sign In
                </a>
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
