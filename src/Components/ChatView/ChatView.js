import "./ChatView.css";
import { useEffect } from "react";

// React Router
import { useNavigate } from "react-router-dom";
// Components
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useCameraSlice from "../../hooks/useCameraSlice";

function ChatView() {
  const {chatView} = useCameraSlice()
  const navigate = useNavigate();

  useEffect(() => {
    if (!chatView) {
      navigate("/chats");
    }
  }, [chatView, navigate]);

  const exit = () => {
    navigate("/chats");
  };

  return (
    <div className="chatView">
      <img src={chatView} alt="Selected Shot" onClick={exit} />
      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={10}
          size={50}
          colors={['#A30000']}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default ChatView;
