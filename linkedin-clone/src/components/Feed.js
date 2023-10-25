import React, { useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import Inputoptions from "./Inputoptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { useState } from "react";
import { db } from "./firebase";
import {
  collection,
  orderBy,
  getDocs,
  addDoc,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "posts"), orderBy("timestamp", "desc"))
        );
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  const sendPost = (e) => {
    e.preventDefault();

    try {
      const docRef = addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />

          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <Inputoptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <Inputoptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#e7a33e"
          />
          <Inputoptions Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <Inputoptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
