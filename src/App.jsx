import React from 'react'
import { RouterProvider } from "react-router-dom";
import router from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
   <ToastContainer />
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}
