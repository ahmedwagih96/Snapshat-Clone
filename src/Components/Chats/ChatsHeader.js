// Material UI
import { ChatBubble, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
// Firebase
import { auth} from "../../firebase";
import { signOut } from "firebase/auth";
// Custom Hooks
import useUserSlice from "../../hooks/useUserSlice";
function ChatsHeader() {
    const {user} = useUserSlice()
  return (
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
  )
}

export default ChatsHeader