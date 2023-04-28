import "./Preview.css";
import { useEffect } from "react";
// React Router
import { useNavigate } from "react-router-dom";
// Material UI
import {Close} from "@mui/icons-material";
// Components
import ToolBar from "../../Components/ToolBar";
import SendButton from '../../Components/SendButton'
// Custom Hook
import useCameraSlice from "../../hooks/useCameraSlice";

function Preview() {
  const navigate = useNavigate()
  const {capturedImage, resetCapturedImage} = useCameraSlice()
  
  useEffect(()=>{
    if(!capturedImage) navigate('/')
  },[navigate, capturedImage]);

  const close = ()=>{
    resetCapturedImage()
    navigate('/')
  }

  return (
    <div className="preview">
      <Close className="preview__close" onClick={close} />
      <ToolBar/>
      <img src={capturedImage} alt="capture preview" />
      <SendButton/>
    </div>
  );
}

export default Preview;
