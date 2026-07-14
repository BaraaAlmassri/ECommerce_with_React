import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import i18n from '../i18next';
import { useTranslation } from 'react-i18next';




export default function useProducts() {
    const { i18n } = useTranslation();
 const getProducts = async () =>{
        const response = await axiosInstance.get(`/Products`);
       
        return response.data;
    }

    
    const query = useQuery({
        queryKey : ["Products" ,i18n.language],
        queryFn : getProducts,
        staleTime:1000*60*5
    });

    return query;
}
