import { useEffect } from "react";
// Firebase
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
// Custom Hook
import useUserSlice from "./useUserSlice";

function useAuthState() {
  const {user, loginToApp, logoutFromApp} = useUserSlice()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
          loginToApp({
            username: user.displayName,
            profilePic: user.photoURL,
            id: user.uid,
          })
      } else {
        logoutFromApp()
      }
    });
  }, [loginToApp, logoutFromApp]);
  return user;
}

export default useAuthState;
