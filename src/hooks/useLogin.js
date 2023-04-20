// Redux
import { useDispatch } from "react-redux";
import { login } from "../features/appSlice";
// Firebase
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function useLogin() {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(
          login({
            username: user.displayName,
            profilePic: user.photoURL,
            id: user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return signIn;
}

export default useLogin;
