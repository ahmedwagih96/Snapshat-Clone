import "./App.css";
import { useEffect } from "react";

// Components 
import Login from "./Components/Login/Login";
import WebcamCapture from "./Components/WebcamCapture/WebcamCapture";
import Preview from "./Components/Preview/Preview";
import Chats from "./Components/Chats/Chats";
import ChatView from "./Components/ChatView/ChatView";
// React Roouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Redux 
import { useSelector, useDispatch } from "react-redux";
import { login, selectedUser, logout } from "./features/appSlice";
// Firebase
import { auth } from "./firebase";
import {onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectedUser);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        dispatch(login({
          username: user.displayName,
          profilePic: user.photoURL,
          id: user.uid,
        }))
      }else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<WebcamCapture />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/view" element={<ChatView />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
