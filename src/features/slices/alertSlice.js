import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const alertSlice = createSlice({
    name: "alerts",
    initialState, 
    reducers: {
        setAlert: {
            reducer: (state, action) => {
                const {payload} = action;
                return [payload]
            }, 
            prepare: (message, alertType, id) => {
                return {payload: {message, alertType, id}}
            }
        },
        removeAlert: (state, action, id) => {
            const {payload} = action;
            return state.filter(alert => alert.id !== payload)
        }
    }
})

export const {setAlert, removeAlert} = alertSlice.actions;
const alertReducer = alertSlice.reducer;
export default alertReducer;