import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export const UseCategories = ()=>{
    const getCategories = async ()=>{
        
            const response  = await axios.get('https://knowledgeshop.runasp.net/api/Categories' , {
                headers:{
                    "Accept-Language":"en"
                }
            });

            return response.data.response.data;
        
    }


return useQuery({
    queryKey:["Categories"],
    queryFn:getCategories,
    staleTime: 1000 * 60 *5
});


}