import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const authApi = createApi({
    reducerPath: "authApi", 
    baseQuery: fetchBaseQuery({
        baseUrl: "api/auth/", 
        prepareHeaders: (headers) => {
            const token = JSON.parse(localStorage.getItem("token"))
            if (token) {
                headers.set('authorization', token)
            }
            return headers
        }
    }), 

    tagTypes: ['POST', 'USER', 'COMMENT'],
    endpoints: (builder) => ({})
})