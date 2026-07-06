import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';




export default function useProductDet(id) {
 const getProduct = async () =>{
        const response = await axiosInstance.get(`/Products/${id}`);
       
        return response.data;
    }

    
    const query = useQuery({
        queryKey : ["Product" , 'en',id],
        queryFn : getProduct,
        staleTime:1000*60*5
    });

    return query;
}
