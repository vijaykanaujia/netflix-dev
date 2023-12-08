import React from "react";
import Header from "./Header";

const Login = () => {
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
        <form>
          <h2 className="mt-4 mb-8 text-white text-3xl font-bold">Sign In</h2>
          <input
            type="text"
            className="w-full py-3 px-2 bg-zinc-700 placeholder-zinc-400 text-white border-zinc-700 rounded-sm"
            placeholder="Email or phone number"
          />
          <input
            type="pasword"
            className="mt-4 w-full py-3 px-2 bg-zinc-700 placeholder-zinc-400 text-white border-zinc-700 rounded-sm"
            placeholder="Password"
          />
          <button
            type="button"
            className="mt-4 px4 py-2 w-full rounded-sm bg-red-600 hover:bg-red-700 text-white"
          >
            Sign In
          </button>
          <div className="text-center mt-2">
            <a href="/#" className="hover:underline text white text-white">Forgot password?</a>
          </div>
          <div className="mt-10">
            <label className="text-white"><input type="checkbox" /> Remeber me</label>
          </div>
          <div className="mt-6">
            <span className="text-gray-300">New to Netflix? <a href="/#" className="hover:underline text white text-white">Sign up now</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
