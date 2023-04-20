// Firebase
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useUserSlice from "./useUserSlice";
// React Toast
import { toast } from 'react-toastify';

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
      .catch(() => {
        toast.error("Please Sign In", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }) ;
  };
  return signIn;
}

export default useLogin;
