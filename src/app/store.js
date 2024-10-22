import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import signupReducer from '../features/signup/signupSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    users: usersReducer
  },
})