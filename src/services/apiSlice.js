import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const apiSlice = createApi({
    reducerPath: "apiSlice", 
    baseQuery: fetchBaseQuery({
        baseUrl: "api/", 
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