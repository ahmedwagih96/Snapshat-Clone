// Material UI
import {Send} from "@mui/icons-material";
// Custom Hook 
import useSendPost from "../../hooks/useSendPost";

function SendButton() {
    
  const sendPost = useSendPost()
  return (
    <div className="preview__footer" onClick={sendPost}>
    <h2>Send Now</h2>
    <Send className="preview__sendIcon" />
  </div>
  )
}

export default SendButton