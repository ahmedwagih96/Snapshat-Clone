import "./App.css";

// Components
import Login from "./Components/Login/Login";
import WebcamCapture from "./Components/WebcamCapture/WebcamCapture";
import Preview from "./Components/Preview/Preview";
import Chats from "./Components/Chats/Chats";
import ChatView from "./Components/ChatView/ChatView";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuthState from "./hooks/useAuthState";

function App() {
  const user = useAuthState();
  const apiKey = process.env.API_KEY;
  console.log(apiKey)

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
