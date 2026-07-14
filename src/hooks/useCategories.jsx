import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/axiosInstance';
import { useTranslation } from 'react-i18next';


export default function useCategories() {
    const {i18n} = useTranslation();
 const getCategories = async () =>{
        const response = await axiosInstance.get(`/Categories`);
       
        return response.data;
    }

    
    const query = useQuery({
        queryKey : ["Categories" , i18n.language],
        queryFn : getCategories,
        staleTime:1000*60*5
    });

    return query;
}
