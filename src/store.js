import { configureStore } from "@reduxjs/toolkit";
import { mockApi } from "./services/mockApi";
import authReducer from "./features/auth/authSlice";
import alertReducer from "./features/auth/alertSlice";

export const store = configureStore({
    reducer: {
        [mockApi.reducerPath]: mockApi.reducer,
        auth: authReducer,
        alert: alertReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mockApi.middleware)
})