import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useCameraSlice from "./useCameraSlice";

function useCaptureImage(webcamRef) {
  const {captureImage} = useCameraSlice()
    const navigate = useNavigate();
    const capture = useCallback(() => {
      console.log("capture")
      const imageSrc = webcamRef.current.getScreenshot();
      captureImage(imageSrc)
      navigate("/preview");
      console.log("capture");
    }, [webcamRef, navigate, captureImage]);
  
  return capture
}

export default useCaptureImage