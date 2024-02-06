import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api: any = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
//     postRegisterDriver: builder.mutation<void, counter>({
//       query: (user) => ({
//         url: "/driver/registerDriver",
//         method: "POST",
//         body: user,
//       }),
//     }),
     getHiraganaApi: builder.query<void, void>({
      query: () => `/quiz/getHiraganaApi`,
    }),
    
})
})
 
   

  

export const {
//   usePostRegisterDriverMutation,
useLazyGetHiraganaApiQuery,
  
} = api;