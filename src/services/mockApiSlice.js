import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const mockApiSlice = createApi({
    reducerPath: "mockApi", 
    baseQuery: fetchBaseQuery({
        baseUrl: "/api", 
        prepareHeaders: (headers) => {
            const token = JSON.parse(localStorage.getItem("auth_token"))
            if (token) {
                headers.set('authorization', token)
            }
            return headers
        }
    }), 

    tagTypes: ['POST', 'USER', 'COMMENT'],
    endpoints: (builder) => ({})
})