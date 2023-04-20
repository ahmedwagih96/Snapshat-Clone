import { useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { login, selectedUser, logout } from "../features/appSlice";
// Firebase
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function useAuthState() {
  const user = useSelector(selectedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            username: user.displayName,
            profilePic: user.photoURL,
            id: user.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return user;
}

export default useAuthState;
