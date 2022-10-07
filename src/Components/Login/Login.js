import "./Login.css";
// Material UI
import { Button } from "@mui/material";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/appSlice";
// Firebase
import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
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
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pbs.twimg.com/profile_images/1471625412182687760/B5CsS8mK_400x400.jpg"
          alt=""
        />
        <Button variant="outline" onClick={signIn}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
