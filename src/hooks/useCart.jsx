import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useCart() {
     const token = localStorage.getItem('accessToken');
  const getItems = async ()=>{
    const response = await authAxiosInstance.get(`/Carts` )
      console.log(response.data);
   return response.data;
  }

    
    const query = useQuery({
        queryKey : ["Cart"],
        queryFn : getItems,
        staleTime:1000*60*5
    });

    return query;
}
