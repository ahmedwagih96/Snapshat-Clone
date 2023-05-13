import { useEffect, lazy, Suspense } from "react";
import "./App.css";
// React Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// React Router
import { Routes, Route } from "react-router-dom";
// Firebase
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
// Custom Hooks
import useUserSlice from "./hooks/useUserSlice";
// Components 
import LoadingSpinner from './Components/LoadingSpinner'
// Pages
const Login = lazy(() => import("./pages/Login"));
const WebcamCapture = lazy(() => import("./pages/WebcamCapture"));
const Preview = lazy(() => import("./pages/Preview"));
const Chats = lazy(() => import("./pages/Chats"));
const ChatView = lazy(() => import("./pages/ChatView"));

function App() {
  const { loginToApp, logoutFromApp } = useUserSlice();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loginToApp(user);
      } else {
        logoutFromApp();
      }
    });
  }, [loginToApp, logoutFromApp]);

  return (
    <div className="app">
        <Suspense fallback = {<LoadingSpinner/>}>
          <Routes>
            <Route path="/" element={<WebcamCapture />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/view" element={<ChatView />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
