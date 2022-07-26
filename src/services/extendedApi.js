import { authApi } from "./authApi";

export const extendedApi = authApi.injectEndpoints({
    endpoints: (builder)=> ({
        registerUser: builder.mutation({
            query: contactInfo => ({
                url: "signup",
                method: "POST",
                body: contactInfo
            })
        })
    })
})

export const {useRegisterUserMutation} = extendedApi;