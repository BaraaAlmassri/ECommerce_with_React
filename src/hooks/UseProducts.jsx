import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function UseProducts() {

    const getProducts = async ()=>{
           const response = await axios.get(`https://knowledgeshop.runasp.net/api/Products` , {
            headers:{
                "Accept-Language":'en'
            }
           })
           return response.data.response.data
    }


 return useQuery({
    queryKey:["products"],
    queryFn:getProducts,
    staleTime: 1000 * 60 * 5
 })
}
