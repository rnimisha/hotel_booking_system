import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import titleReducer from '../features/title/titleSlice'
import modalReducer from '../features/modal/modalSlice'
import pageReducer from '../features/page/pageSlice'
import userReducer from './features/page/userReducer'

const reducers = combineReducers({
  title: titleReducer,
  modal: modalReducer,
  page: pageReducer,
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer
})

export default store
