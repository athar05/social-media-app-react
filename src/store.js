import { configureStore } from "@reduxjs/toolkit";
import { mockApiSlice } from "./services/mockApiSlice";
import authReducer from "./features/auth/authSlice";
import alertReducer from "./features/auth/alertSlice";
import postsReducer from "./features/auth/postsSlice"

export const store = configureStore({
    reducer: {
        [mockApiSlice.reducerPath]: mockApiSlice.reducer,
        auth: authReducer,
        alert: alertReducer,
        posts: postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApiSlice.middleware)
})