import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export default function UseProductDetails(id) {

    const getProductDetails = async ()=>{
        const response = await axios.get(`https://knowledgeshop.runasp.net/api/Products/${id}` , {
            headers:{
                "Accept-Language" : "en"
            }
        })
            
        return response.data.response;
    }
 return useQuery({
    queryKey:["product" , id],
    queryFn:getProductDetails,
    staleTime: 1000 * 60 * 5
 })
}
