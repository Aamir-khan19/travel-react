import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import signupReducer from '../features/signup/signupSlice'
import usersReducer from '../features/users/usersSlice'
import companiesReducer from '../features/company/companySlice'
import itinerariesReducer from '../features/itinerary/itinerarySlice'
import publicReducer from '../features/public/publicSlice'
import blogsReducer from '../features/blog/blogSlice'
import leadReducer from '../features/lead/leadSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    users: usersReducer,
    companies: companiesReducer,
    itineraries: itinerariesReducer,
    public: publicReducer,
    blogs: blogsReducer,
    leads: leadReducer
  },
})