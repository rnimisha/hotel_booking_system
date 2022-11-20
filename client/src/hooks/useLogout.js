import { useDispatch } from 'react-redux'
import { changeUserInfo } from '../features/user/userSlice'

export const useLogout = () => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(changeUserInfo({ id: '', role: '', name: '', token: '' }))
  }
  return { logOut }
}
