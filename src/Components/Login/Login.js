import "./Login.css";
// Material UI
import { Button } from "@mui/material";
import useLogin from "../../hooks/useLogin";

function Login() {
  const signIn = useLogin();
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo"
          alt="Login"
        />
        <Button
          variant="outline"
          onClick={signIn}
          classes={{ backgroundColor: "white" }}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
