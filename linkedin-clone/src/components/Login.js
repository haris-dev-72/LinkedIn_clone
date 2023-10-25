import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "firebase/auth";
import linkedIn from "../assets/linked login page.png";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const dispatch = useDispatch();

  const registerNow = (e) => {
    if (!name) {
      return alert("Please enter full name");
    }
    if (!email) {
      return alert("Please enter email");
    }
    if (!password) {
      return alert("Please enter password");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilepic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilepic,
            })
          );
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilepic,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilepic,
          })
        );
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  return (
    <div className="login">
      <img src={linkedIn} alt="Linked In" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name (Required if Regestering)"
        />
        <input
          value={profilepic}
          onChange={(e) => setProfilepic(e.target.value)}
          type="text"
          placeholder="Profile Picture URL (optional)"
          id=""
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={registerNow}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
