import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/title/titleSlice'
import modalReducer from '../features/modal/modalSlice'
import pageReducer from '../features/page/pageSlice'

const store = configureStore({
  reducer: {
    title: titleReducer,
    modal: modalReducer,
    page: pageReducer
  }
})

export default store
