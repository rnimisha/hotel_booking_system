import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/title/titleSlice'
import modalReducer from '../features/modal/modalSlice'

const store = configureStore({
  reducer: {
    title: titleReducer,
    modal: modalReducer
  }
})

export default store
