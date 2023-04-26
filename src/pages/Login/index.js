import "./Login.css";
// Material UI
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
          <button
            onClick={signIn}
            className="login__button"
          >
            Sign in with Google
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"/>
          </button>
      </div>
    </div>
  );
}

export default Login;
