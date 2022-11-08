import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  role: '',
  token: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserInfo: (state, action) => {
      state = action.payload
    }
  }
})

export default userSlice.reducer

export const { changeUserInfo } = userSlice.actions
