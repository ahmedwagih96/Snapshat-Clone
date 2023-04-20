// Firebase
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useUserSlice from "./useUserSlice";

function useLogin() {
  const {loginToApp} = useUserSlice()
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
          loginToApp({
            username: user.displayName,
            profilePic: user.photoURL,
            id: user.uid,
          })
      })
      .catch((error) => alert(error.message));
  };
  return signIn;
}

export default useLogin;
