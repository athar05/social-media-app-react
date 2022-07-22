import { createSlice} from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
    token: localStorage.getItem("token"), 
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