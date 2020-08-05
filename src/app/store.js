import { configureStore } from '@reduxjs/toolkit'
import turnipsReducer from '../features/turnips/turnipsSlice'
export default configureStore({
  reducer: {
    turnips: turnipsReducer
  }
})