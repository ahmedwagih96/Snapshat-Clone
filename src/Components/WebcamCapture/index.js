import "./WebcamCapture.css";
import { useRef } from "react";
import Webcam from "react-webcam";
import { RadioButtonUnchecked } from "@mui/icons-material";
import useCaptureImage from "../../hooks/useCaptureImage";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = useRef(null);
  const capture = useCaptureImage(webcamRef)

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        width={videoConstraints.width}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <RadioButtonUnchecked
        className="webcamCapture__button"
        onClick={capture}
        fontSize ='large'
      />
    </div>
  );
}

export default WebcamCapture;
