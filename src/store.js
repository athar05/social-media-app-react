import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit/dist/configureStore";

export const store = configureStore({
    reducers: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})