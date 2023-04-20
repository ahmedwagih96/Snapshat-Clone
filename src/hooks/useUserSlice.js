import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedUser } from '../features/userSlice';
import { login, logout } from '../features/userSlice';
function useUserSlice() {
    const user = useSelector(selectedUser)
    const dispatch = useDispatch()
    const loginToApp = useCallback((user)=>{dispatch(login(user))},[dispatch])
    const logoutFromApp = useCallback(()=>{dispatch(logout())},[dispatch])
  return {user, loginToApp, logoutFromApp}
}

export default useUserSlice