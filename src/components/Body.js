import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      // if (user) {
      //   const { uid, email, displayName, photoURL } = user;
      //   console.log('if call');
      //   console.log(uid, email, displayName, photoURL);
      //   dispatch(addAuth({ uid, email, displayName, photoURL }));
      // } else {
      //   console.log('else call');
      //   dispatch(removeAuth());
      // }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
