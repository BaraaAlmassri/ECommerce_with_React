import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import axiosInstance from '../api/axiosInstance'

export default function UseProducts() {

    const getProducts = async ()=>{
           const response = await axiosInstance.get(`/Products`) 
           return response.data.response.data
    }


 return useQuery({
    queryKey:["products"],
    queryFn:getProducts,
    staleTime: 1000 * 60 * 5
 })
}
