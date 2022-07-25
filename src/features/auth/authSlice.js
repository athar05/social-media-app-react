import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("auth_token"), 
    isAuthenticated:  false, 
    user: null
}

const authSlice = createSlice({
    name: "auth", 
    initialState, 
    reducers: {
        signUp:(state, action)=> {
            const {user} = action.payload; 
            state.isAuthenticated= true; 
            state.user= user;
        }, 
        login: (state, action)=> {

        }, 
        logout: (state, action)=> {

        }, 
        updateUser: (state, action)=> {

        }
    }
})

export const { signUp, login ,logout, updateUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;