import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import coverPhoto from "../assets/cover.jpg";
import { selectUser } from "../features/userSlice";
function Sidebar() {
  const user = useSelector(selectUser);

  const RecentItems = (topic) => {
    return (
      <div className="sidebar__recentitems">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={coverPhoto} />
        <Avatar
          style={{
            textTransform: "uppercase",
            fontWeight: "bolder",
            color: "white",
            backgroundColor: "black",
          }}
          src={user.photoUrl}
          className="sidebar__avatar"
        >
          {user.email.charAt(0).toUpperCase()}
        </Avatar>

        <h2
          style={{
            textTransform: "uppercase",
            fontWeight: "bolder",
          }}
        >
          {user.displayName}
        </h2>
        <h4 style={{ textTransform: "uppercase" }}>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">34,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statnumber">44,543</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <>
          <p>Recent</p>
          {RecentItems("ReactJS")}
          {RecentItems("Web Dev")}
          {RecentItems("DevOps")}
        </>
      </div>
    </div>
  );
}

export default Sidebar;
