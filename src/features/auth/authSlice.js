import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("auth_token"), 
    isAuthenticated: null, 
    user: null
}

const authSlice = createSlice({
    name: "auth", 
    initialState, 
    reducers: {
        signUp:(state, action)=> {
            const {user, token} = action.payload; 
            state.token= localStorage.setItem("token", token);
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
export default authSlice.reducer;