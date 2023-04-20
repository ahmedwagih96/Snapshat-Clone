import "./Chats.css";
// Material UI
import { RadioButtonUnchecked} from "@mui/icons-material";
// Components
import ChatsHeader from "./ChatsHeader";
import Chat from "../Chat/Chat";
// React Router
import { useNavigate } from "react-router-dom";
// Custom Hooks
import useFetchPosts from "../../hooks/useFetchPosts";
import useCameraSlice from "../../hooks/useCameraSlice";

function Chats() {
  const posts = useFetchPosts()
  const {resetCapturedImage} = useCameraSlice()
  const navigate = useNavigate();

  const takeSnap = () => {
    resetCapturedImage()
    navigate("/");
  };

  return (
    <div className="chats">
      {/* CHATS HEADER */}
      <ChatsHeader/>
      {/* CHATS */}
      <div className="chats__posts">
        {posts.map(
          ({ id, data }) => (
            <Chat
              key={id}
              id = {id}
              data = {data}
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
