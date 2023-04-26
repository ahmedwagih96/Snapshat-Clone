import { useEffect } from "react";
import "./App.css";
// React Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Pages
import Login from "./pages/Login";
import WebcamCapture from "./Components/WebcamCapture";
import Preview from "./Components/Preview";
import Chats from "./Components/Chats";
import ChatView from "./Components/ChatView/ChatView";
// React Router
import { Routes, Route, useNavigate } from "react-router-dom";
// Firebase
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
// Custom Hooks
import useUserSlice from "./hooks/useUserSlice";
function App() {
  const { loginToApp, logoutFromApp } = useUserSlice();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loginToApp({
          username: user.displayName,
          profilePic: user.photoURL,
          id: user.uid,
        });
        navigate("/");
      } else {
        logoutFromApp();
        navigate("/login");
      }
    });
  }, [loginToApp, logoutFromApp, navigate]);

  return (
    <div className="app">
      <div className="app__bodyBackground">
        <Routes>
          <Route path="/" element={<WebcamCapture />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chats/view" element={<ChatView />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
