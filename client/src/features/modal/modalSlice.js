import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: 'none'
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleOpen: (state, action) => {
      state.open = action.payload
    },
    handleClose: (state) => {
      state.open = 'none'
    }
  }
})

export default ModalSlice.reducer
export const { handleClose, handleOpen } = ModalSlice.actions
