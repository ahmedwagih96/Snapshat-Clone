import "./App.css";

// Components
import Login from "./Components/Login";
import WebcamCapture from "./Components/WebcamCapture";
import Preview from "./Components/Preview";
import Chats from "./Components/Chats";
import ChatView from "./Components/ChatView/ChatView";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuthState from "./hooks/useAuthState";

function App() {
  const user = useAuthState();
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <div className="app__bodyBackground">
            <Routes>
              <Route path="/" element={<WebcamCapture />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/chats/view" element={<ChatView />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
