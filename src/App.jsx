import React from 'react'
import { RouterProvider } from "react-router-dom";
import router from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { CssBaseline } from '@mui/material';


const queryClient = new QueryClient()
export default function App() {
  return (
   <ThemeProvider theme={theme}>
     <QueryClientProvider client={queryClient}>
      <CssBaseline></CssBaseline>
  <RouterProvider router={router} />
   <ToastContainer />
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
   </ThemeProvider>
  )
}
