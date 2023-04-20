import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useCameraSlice from "./useCameraSlice";

function useCaptureImage(webcamRef) {
  const {captureImage} = useCameraSlice()
    const navigate = useNavigate();
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      captureImage(imageSrc)
      navigate("/preview");
    }, [webcamRef, navigate, captureImage]);
  
  return capture
}

export default useCaptureImage