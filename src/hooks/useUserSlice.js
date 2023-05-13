import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedUser } from "../features/userSlice";
import { login, logout } from "../features/userSlice";
// React Router
import { useNavigate } from "react-router-dom";
function useUserSlice() {
  const navigate = useNavigate();
  const user = useSelector(selectedUser);
  const dispatch = useDispatch();
  const loginToApp = useCallback(
    (user) => {
      navigate("/");
      dispatch(login(user));
    },
    [dispatch]
  );
  const logoutFromApp = useCallback(() => {
    navigate("/login");
    dispatch(logout());
  }, [dispatch]);
  return { user, loginToApp, logoutFromApp };
}

export default useUserSlice;
