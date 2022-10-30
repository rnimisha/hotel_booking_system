import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1
}

const PageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    }
  }
})

export default PageSlice.reducer
export const { changePage } = PageSlice.actions
