import { configureStore } from "@reduxjs/toolkit";
import { mockApiSlice } from "./services/mockApiSlice";
import authReducer from "./features/slices/authSlice";
import alertReducer from "./features/slices/alertSlice";
import postsReducer from "./features/slices/postsSlice"

export const store = configureStore({
    reducer: {
        [mockApiSlice.reducerPath]: mockApiSlice.reducer,
        auth: authReducer,
        alert: alertReducer,
        posts: postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApiSlice.middleware)
})