import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleOpen: (state) => {
      state.open = true
    },
    handleClose: (state) => {
      state.open = false
    }
  }
})

export default ModalSlice.reducer
export const { handleClose, handleOpen } = ModalSlice.actions
