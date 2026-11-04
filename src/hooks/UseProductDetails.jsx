import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import axiosInstance from '../api/axiosInstance';

export default function UseProductDetails(id) {

    const getProductDetails = async ()=>{
        const response = await axiosInstance.get(`/Products/${id}`) 
            
        return response.data.response;
    }
 return useQuery({
    queryKey:["product" , id],
    queryFn:getProductDetails,
    staleTime: 1000 * 60 * 5
 })
}
