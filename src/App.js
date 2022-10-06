import "./App.css";

import WebcamCapture from "./Components/WebcamCapture/WebcamCapture";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./Components/Preview/Preview";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebcamCapture />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
