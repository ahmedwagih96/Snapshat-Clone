import "./Chats.css";
import { useEffect, useState } from "react";
// Material UI
import { ChatBubble, RadioButtonUnchecked, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
// Firebase
import { auth, db } from "../../firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { signOut } from "firebase/auth";
// Components
import Chat from "../Chat/Chat";
// React Router
import { useNavigate } from "react-router-dom";
// Redux
import { selectedUser } from "../../features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetCameraImage } from "../../features/cameraSlice";

function Chats() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const takeSnap = () => {
    dispatch(resetCameraImage());
    navigate("/");
  };

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar
          src={user.profilePic}
          className="chats__avatar"
          onClick={() => {
            signOut(auth);
          }}
        />
        <div className="chats__search">
          <Search className="chats__searchIcon" />
          <input type="text" placeholder="Friends" />
          <ChatBubble className="chats__chatIcon" />
        </div>
      </div>
      <div className="chats__posts">
        {posts.map(
          ({ id, data: { username, image, read, timestamp, profilePic } }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              image={image}
              read={read}
              timestamp={timestamp}
              profilePic={profilePic}
            />
          )
        )}
      </div>
      <RadioButtonUnchecked
        className="chats_takePicIcon"
        fontSize="large"
        onClick={takeSnap}
      />
    </div>
  );
}

export default Chats;
