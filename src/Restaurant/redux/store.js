import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './notificationSlice'
import loadingReducer from './loadingSlice'
import errorReducer from './errorSlice'

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    loading: loadingReducer,
    error: errorReducer
  },
})