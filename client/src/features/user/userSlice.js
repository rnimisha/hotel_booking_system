import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  role: '',
  name: '',
  email: '',
  token: ''
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeUserInfo: (state, action) => {
      const { id, role, name, email, token } = action.payload
      state.id = id
      state.role = role
      state.name = name
      state.email = email
      state.token = token
    }
  }
})

export default userSlice.reducer

export const { changeUserInfo } = userSlice.actions
