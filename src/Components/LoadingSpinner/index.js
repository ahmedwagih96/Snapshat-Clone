import { InfinitySpin } from "react-loader-spinner";
import "./style.css";
function LoadingSpinner() {
  return (
    <div className="loading__spinner">
      <InfinitySpin width="200" color="#000000" />
    </div>
  );
}

export default LoadingSpinner;
