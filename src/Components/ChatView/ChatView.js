import "./ChatView.css";
import { useEffect } from "react";
// Redux
import { useSelector } from "react-redux";
import { selectSelectedImage } from "../../features/userSlice";
// React Router
import { useNavigate } from "react-router-dom";
// Components
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);

  const exit = () => {
    navigate("/chats");
  };

  return (
    <div className="chatView">
      <img src={selectedImage} alt="Selected Shot" onClick={exit} />
      <div className="chatView__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={10}
          size={50}
          colors={[
            ["#004777", 0.333],
            ["#F7B801", 0.333],
            ["#A30000", 0.333],
          ]}
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
