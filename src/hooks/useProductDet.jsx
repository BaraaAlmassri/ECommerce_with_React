import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import i18n from '../i18next';




export default function useProductDet(id) {
 const getProduct = async () =>{
        const response = await axiosInstance.get(`/Products/${id}`);
       
        return response.data;
    }

    
    const query = useQuery({
        queryKey : ["Product" , i18n.language,id],
        queryFn : getProduct,
        staleTime:1000*60*5
    });

    return query;
}
