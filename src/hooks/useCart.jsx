import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useCart() {
    
  const getItems = async ()=>{
    const response = await authAxiosInstance.get('/Carts' )
   return response.data;
  }

    
    const query = useQuery({
        queryKey : ['cart' , 'en'],
        queryFn : getItems,
        staleTime:1000*60*5
    });

    return query;
}
