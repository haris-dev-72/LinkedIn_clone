import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { logout, selectUser } from "../features/userSlice";
import logo from "../assets/linkedin__logo__144.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatar from "../assets/avatar.png";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOutofApp = () => {
    dispatch(logout());
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.error("Error during sign out:", error);
      });
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Job" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption
          avatar={true}
          // title={user.displayName}
          onClick={logOutofApp}
        />
      </div>
    </div>
  );
}

export default Header;
