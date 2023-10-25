import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import Inputoptions from "./Inputoptions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);

  return (
    <div ref={ref} className="post">
      {/* post header started */}
      <div className="post__header">
        <Avatar
          style={{
            textTransform: "uppercase",
            fontWeight: "bolder",
            color: "white",
            backgroundColor: "black",
          }}
          src={photoUrl}
        >
          {name.charAt(0)}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      {/* post header ended  */}
      {/* post body started */}
      <div className="post__body">
        <p>{message}</p>
      </div>
      {/* post body ended */}
      <div className="post__buttons">
        <Inputoptions Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <Inputoptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <Inputoptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <Inputoptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
