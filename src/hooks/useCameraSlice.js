import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCameraImage } from '../features/cameraSlice';
import { setCameraImage, resetCameraImage } from '../features/cameraSlice';
function useCameraSlice() {
    const capturedImage = useSelector(selectCameraImage)
    const dispatch = useDispatch();
    const captureImage = useCallback((image)=>{dispatch(setCameraImage(image))},[dispatch])
    const resetCapturedImage = useCallback(()=>{dispatch(resetCameraImage)},[dispatch])
  return {capturedImage, captureImage, resetCapturedImage}
}

export default useCameraSlice