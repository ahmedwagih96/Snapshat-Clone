import "./Chat.css";
// Material UI
import { StopRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
// Redux
import { useDispatch } from "react-redux";
import { selectImage } from "../../features/userSlice";
// Components
import ReactTimeAgo from "react-timeago";
// Firebase
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
// React Router
import { useNavigate } from "react-router-dom";

function Chat({ id, username, timestamp, read, image, profilePic }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = () => {
    if (!read) {
      dispatch(selectImage(image));
      const docRef = doc(db, "posts", id);
      setDoc(docRef, { read: true }, { merge: true });
      navigate("/chats/view");
    }
  };
  return (
    <div className="chat" onClick={open}>
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
