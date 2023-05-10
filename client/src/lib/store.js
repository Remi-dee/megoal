import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/authSlice";
import goalReducer from "../slices/goals/goalSlice"

//Global Store
export const store = configureStore({
    reducer: {
      auth: authReducer,
      goals: goalReducer
    },

    
  });
  