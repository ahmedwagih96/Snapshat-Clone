// Material UI
import { StopRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
// Components
import ReactTimeAgo from "react-timeago";
// Firebase
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
// React Router
import { useNavigate } from "react-router-dom";
import useCameraSlice from "../hooks/useCameraSlice";

function Chat({ id, data }) {
  const {username, timestamp, read, image, profilePic} = data
  const {setSnapImage} = useCameraSlice()
  const navigate = useNavigate();
  const openChat = () => {
    if (!read) {
      setSnapImage(image)
      const docRef = doc(db, "posts", id);
      setDoc(docRef, { read: true }, { merge: true });
      navigate("/chats/view");
    }
  };
  return (
    <div className="chat" onClick={openChat}>
      <Avatar src={profilePic} className="chat__avatar" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          {!read && `Tap to view -${" "}`}
          <ReactTimeAgo date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopRounded className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
