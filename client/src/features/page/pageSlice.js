import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
  count: 1
}

const PageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    },
    changeCount: (state, action) => {
      state.count = action.payload
    }
  }
})

export default PageSlice.reducer
export const { changePage, changeCount } = PageSlice.actions
