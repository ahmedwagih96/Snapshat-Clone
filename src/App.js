import { useEffect, lazy, Suspense } from "react";
import "./App.css";
// React Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// React Router
import { Routes, Route, useNavigate } from "react-router-dom";
// Firebase
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
// Custom Hooks
import useUserSlice from "./hooks/useUserSlice";
// Pages
const Login = lazy(() => import("./pages/Login"));
const WebcamCapture = lazy(() => import("./pages/WebcamCapture"));
const Preview = lazy(() => import("./pages/Preview"));
const Chats = lazy(() => import("./pages/Chats"));
const ChatView = lazy(() => import("./pages/ChatView"));

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
        <Suspense>
          <Routes>
            <Route path="/" element={<WebcamCapture />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/view" element={<ChatView />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
