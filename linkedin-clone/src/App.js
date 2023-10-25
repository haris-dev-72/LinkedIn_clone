import React, { useEffect } from "react";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Widgets from "./components/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
