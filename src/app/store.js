import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import signupReducer from '../features/signup/signupSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer
  },
})