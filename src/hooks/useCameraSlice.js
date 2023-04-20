import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCameraImage, selectChatView } from '../features/cameraSlice';
import { setCameraImage, resetCameraImage, setChatView, resetChatView } from '../features/cameraSlice';
function useCameraSlice() {
    const capturedImage = useSelector(selectCameraImage)
    const chatView = useSelector(selectChatView)
    const dispatch = useDispatch();
    const captureImage = useCallback((image)=>{dispatch(setCameraImage(image))},[dispatch])
    const resetCapturedImage = useCallback(()=>{dispatch(resetCameraImage)},[dispatch])
    const setSnapImage = useCallback((image)=>{dispatch(setChatView(image))},[dispatch])
    const resetSnapImage = useCallback(()=>{dispatch(resetChatView)},[dispatch])
  return {capturedImage, captureImage, resetCapturedImage, chatView, setSnapImage, resetSnapImage}
}

export default useCameraSlice