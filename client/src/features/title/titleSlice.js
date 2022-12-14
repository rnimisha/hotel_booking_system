import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Almond Hotel'
}

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload
    }
  }
})

export default titleSlice.reducer
export const { changeTitle } = titleSlice.actions
