import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/title/titleSlice'

const store = configureStore({
  reducer: {
    title: titleReducer
  }
})

export default store
