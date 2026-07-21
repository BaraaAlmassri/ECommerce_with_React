import React, { useEffect } from 'react'
import { RouterProvider } from "react-router/dom";
import router from "./routes"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './i18next'
import { useTranslation } from 'react-i18next';
import { CssBaseline, ThemeProvider } from '@mui/material';
import getTheme from './theme';
import useThemeStore from './store/useThemeStore';

export default function App() {

  const {i18n} = useTranslation();
  const mode = useThemeStore((state)=> state.mode);


   useEffect(()=>{
             const dir = i18n.language === "ar" ? "rtl" : "ltr";
             document.documentElement.dir=dir;
   }, [i18n.language]
  
  )


  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline></CssBaseline>
                     <RouterProvider router={router} />
      </ThemeProvider>
       
    </QueryClientProvider>
      
         
    </>
  )
}
